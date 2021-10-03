import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  InputGroup,
  InputTextArea,
  TitleInput,
  QtdInput,
  ButtonView,
  TextButton,
} from './styled';

import HeaderComponent from '../../components/Header';
import Tabs from '../../components/Tab';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Create() {
  return (
    <>
      <HeaderComponent />

      <Container>
        <Title>Criar</Title>
        <SubTitle>Nova postagem</SubTitle>

        <InputGroup>
          <TitleInput>Título</TitleInput>
          <Input />
          <QtdInput>0/32</QtdInput>
        </InputGroup>
        <InputGroup>
          <TitleInput>Corpo da Postagem</TitleInput>
          <InputTextArea multiline={true} numberOfLines={4} />
          <QtdInput>0/255</QtdInput>
        </InputGroup>

        <ButtonView>
          <Button>
            <TextButton>Criar</TextButton>
          </Button>
        </ButtonView>
      </Container>
      <Tabs />
    </>
  );
}
