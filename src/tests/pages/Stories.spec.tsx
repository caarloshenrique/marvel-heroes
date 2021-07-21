import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Stories from '../../pages/Stories';

describe('Stories page', () => {
  it('Stories renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <Stories />
      </StaticRouter>,
    );

    expect(screen.getByText('Hero Stories')).toBeInTheDocument();
  });
});
