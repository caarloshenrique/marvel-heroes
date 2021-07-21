import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('Header component', () => {
  it('Header renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <Header />
      </StaticRouter>,
    );

    expect(screen.getByText('Marvel Heroes')).toBeInTheDocument();
  });
});
