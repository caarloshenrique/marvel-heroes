import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import ButtonLink from '../../components/ButtonLink';

describe('ButtonLink component', () => {
  it('ButtonLink renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <ButtonLink link="/">Teste</ButtonLink>
      </StaticRouter>,
    );

    expect(screen.getByText('Teste')).toBeInTheDocument();
  });
});
