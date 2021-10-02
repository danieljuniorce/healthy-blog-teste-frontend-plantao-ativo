import React from 'react';
import { Text } from 'react-native';

import { Container } from './styled';

import HeaderComponent from '../../components/Header';
import FieldComponent from '../../components/Field';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Tabs from '../../components/Tab';

export default function Main() {
  return (
    <Container>
      <HeaderComponent />
      <Button>
        <Text>Enviar</Text>
      </Button>
      <Input />

      <FieldComponent
        title="Olá tudo bem"
        body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        favorite={true}
      />
      <Tabs />
    </Container>
  );
}
