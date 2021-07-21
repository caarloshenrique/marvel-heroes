import React from 'react';

import { Link } from 'react-router-dom';

import { Container, HeaderContent, InfoIndex } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <InfoIndex>
          <Link to="/">
            <strong>Marvel Heroes</strong>
          </Link>
        </InfoIndex>
      </HeaderContent>
    </Container>
  );
};

export default Header;
