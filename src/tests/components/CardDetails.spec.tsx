import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import CardDetails from '../../components/CardDetails';

describe('CardDetails component', () => {
  it('CardDetails renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <CardDetails
          id={101010}
          name="Adam Warlock"
          description="Test Description"
        />
      </StaticRouter>,
    );

    expect(screen.getByText('Adam Warlock')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Stories')).toBeInTheDocument();
    expect(screen.getByText('Comics')).toBeInTheDocument();
    expect(screen.getByText('Series')).toBeInTheDocument();
  });
});
