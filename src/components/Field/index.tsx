import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, View, TextView, Title, Body } from './styled';

type FieldType = {
  title: string;
  body: string;
  item?: object;
};

export default function Field({ title, body, item }: FieldType) {
  const navigation = useNavigation();

  function handlePageView() {
    let route: any = 'View';
    navigation.navigate(route, { item, title });

    return;
  }

  return (
    <Container>
      <Content>
        <Title>{title.substr(0, 18)}</Title>
        <View onPress={() => handlePageView()}>
          <TextView>Ver mais</TextView>
        </View>
      </Content>
      <Body>{body.substr(0, 40)}...</Body>
    </Container>
  );
}
