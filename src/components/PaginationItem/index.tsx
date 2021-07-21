import React from 'react';

import { Button } from './styles';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  onPageChange,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return <Button disabled>{number}</Button>;
  }

  return <Button onClick={() => onPageChange(number)}>{number}</Button>;
}
