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
          {favorite === true ? '(Star)' : <Icon name="star" size={24} />}&nbsp;
          {title}
        </Title>
        <View>
          <TextView>Ver mais</TextView>
        </View>
      </Content>
      <Body>{body.substr(1, 50)}...</Body>
    </Container>
  );
}
