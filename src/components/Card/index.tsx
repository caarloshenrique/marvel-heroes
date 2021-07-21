import React from 'react';

import { Container } from './styles';

interface CardProps {
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export default function Card(card: CardProps) {
  return (
    <Container>
      {card.thumbnail && (
        <img
          src={`${card.thumbnail?.path}.${card.thumbnail?.extension}`}
          alt={card.name}
        />
      )}
      <h2>{card.name}</h2>
    </Container>
  );
}
