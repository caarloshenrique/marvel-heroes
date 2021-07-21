import React, { LinkHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends LinkHTMLAttributes<HTMLLinkElement> {
  link: string;
}

const ButtonLink: React.FC<ButtonProps> = ({ children, link }) => (
  <Container to={link}>{children}</Container>
);

export default ButtonLink;
