import { MdLocalPizza as icon } from 'react-icons/md';

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
    },
  ],
};
