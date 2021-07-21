import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Series from '../../pages/Series';

describe('Series page', () => {
  it('Series renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <Series />
      </StaticRouter>,
    );

    expect(screen.getByText('Hero Series')).toBeInTheDocument();
  });
});
