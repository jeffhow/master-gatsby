import React from 'react';

export default function PizzaList({ pizzas }) {
  return (
    <div>
      {pizzas.map((pizza) => (
        <p>{pizza.name}</p>
      ))}
    </div>
  );
}
