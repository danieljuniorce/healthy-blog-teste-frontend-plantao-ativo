import React from 'react';
import { Container, Title, Image } from './styled';

import './index';
import feather from '../../assets/feather.png';

export default function HeaderComponent() {
  return (
    <Container>
      <Image source={feather} />
      <Title>Healthy Blog</Title>
    </Container>
  );
}
