import styled from 'styled-components';

import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #e23433;
  color: #ffffff;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 200px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#e23433')};
  }
`;
