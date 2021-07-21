import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Comics from '../../pages/Comics';

describe('Comics page', () => {
  it('Comics renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <Comics />
      </StaticRouter>,
    );

    expect(screen.getByText('Hero Comics')).toBeInTheDocument();
  });
});
