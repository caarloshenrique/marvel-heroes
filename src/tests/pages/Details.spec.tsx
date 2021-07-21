import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Details from '../../pages/Details';

describe('Details page', () => {
  it('Details renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <Details />
      </StaticRouter>,
    );

    expect(screen.getByText('Hero Details')).toBeInTheDocument();
  });
});
