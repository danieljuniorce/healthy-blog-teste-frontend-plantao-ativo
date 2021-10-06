import React from 'react';
import { Container, Title, Image } from './styled';

import feather from '../../assets/feather.png';

export default function Header() {
  return (
    <Container>
      <Image source={feather} />
      <Title>Healthy Blog</Title>
    </Container>
  );
}
