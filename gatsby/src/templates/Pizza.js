import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const PizzaGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SinglePizzaPage({ data }) {
  const { pizza } = data;
  const { toppings } = pizza;
  return (
    <PizzaGrid>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
      <div>
        <h2 className="mark">{pizza.name}</h2>
        <ul>
          {toppings.map((t) => (
            <li key={t.id}>{t.name}</li>
          ))}
        </ul>
      </div>
    </PizzaGrid>
  );
}

export const query = graphql`
  query ($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
