import React from 'react';

import { Container, ActionsHero } from './styles';
import ButtonLink from '../ButtonLink';

interface Details {
  id?: number;
  name?: string;
  description?: string;
  thumbnail?: {
    extension?: string;
    path?: string;
  };
}

export default function CardDetails(details: Details) {
  return (
    <Container>
      <img
        src={`${details.thumbnail?.path}.${details.thumbnail?.extension}`}
        alt={details.name}
      />
      <h2>{details.name}</h2>
      <p>{details.description}</p>
      <ActionsHero>
        <ButtonLink link={`/details/${details.id}/stories`}>Stories</ButtonLink>
        <ButtonLink link={`/details/${details.id}/comics`}>Comics</ButtonLink>
        <ButtonLink link={`/details/${details.id}/series`}>Series</ButtonLink>
      </ActionsHero>
    </Container>
  );
}
