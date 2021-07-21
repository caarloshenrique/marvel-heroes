import styled from 'styled-components';

import { shade } from 'polished';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #e23433;
  color: #ffffff;
  height: 50px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 50px;
  font-weight: 500;
  margin: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#e23433')};
  }
`;
