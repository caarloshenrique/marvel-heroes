import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Characters from '../../pages/Characters';

describe('Characters page', () => {
  it('Characters renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <Characters />
      </StaticRouter>,
    );

    expect(screen.getByText('Heroes')).toBeInTheDocument();
  });
});
