import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, View, TextView, Title, Body } from './styled';

type FieldType = {
  title: string;
  body: string;
  favorite: boolean;
};

export default function FieldComponent({ title, body, favorite }: FieldType) {
  return (
    <Container>
      <Content>
        <Title>
          {favorite === true ? '#' : undefined}&nbsp;
          {title.substr(0, 18)}
        </Title>
        <View>
          <TextView>Ver mais</TextView>
        </View>
      </Content>
      <Body>{body.substr(0, 40)}...</Body>
    </Container>
  );
}
