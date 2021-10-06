import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Body } from './styled';

type FieldType = {
  title: string;
  item?: { id: number; userId: number; title: string; body: string };
};

export default function Field({ title, item }: FieldType) {
  const navigation: any = useNavigation();

  function handlePageView() {
    navigation.navigate('View', { item, title });
    return;
  }

  return (
    <Container onPress={() => handlePageView()}>
      <Title>{title.substr(0, 32)}</Title>

      <Body>Veja mais, apertando na Postagem </Body>
    </Container>
  );
}
