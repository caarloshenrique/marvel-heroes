import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/Card';

describe('Card component', () => {
  it('Card renders correctly', () => {
    render(
      <Card
        name="Adam Warlock"
        thumbnail={{ path: 'adam', extension: 'jpg' }}
      />,
    );

    expect(screen.getByText('Adam Warlock')).toBeInTheDocument();
  });
});
