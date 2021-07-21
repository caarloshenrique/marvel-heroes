import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from '../../components/Pagination';

describe('Pagination component', () => {
  it('Pagination renders correctly', () => {
    render(
      <Pagination
        totalCountOfRegisters={2}
        currentPage={1}
        onPageChange={() => {}}
      />,
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
