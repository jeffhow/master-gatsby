import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  // schema name
  name: 'pizza',
  // visable title
  title: 'Pizzas',
  type: 'document',
  icon,
  // document fields
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // this is an awesome feature
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      // min $10.00 / max $50.00
      validation: (Rule) => Rule.min(1000).max(50000),
      // TODO: Add custom input component
      inputComponent: PriceInput,
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'topping',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      toppings0: 'toppings.0.name',
      toppings1: 'toppings.1.name',
      toppings2: 'toppings.2.name',
      toppings3: 'toppings.3.name',
      nToppings: 'toppings.length',
    },
    prepare: ({ title, media, nToppings, ...toppings }) => {
      let desc = '';
      const filteredToppings = Object.values(toppings).filter(Boolean);
      if (nToppings > filteredToppings.length) {
        desc = `${filteredToppings.join(', ')}, and ${
          nToppings - filteredToppings.length
        } more`;
      } else {
        desc = filteredToppings.join(', ');
      }
      // console.log(toppings);
      return {
        title,
        media,
        subtitle: desc, // toppings.reduce((t) => t.name).join(''),
      };
    },
  },
};
