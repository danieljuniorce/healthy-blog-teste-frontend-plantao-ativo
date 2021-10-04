import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//import { delPost } from '../../store/posts';
import api from '../../api';
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
import { addPost } from '../../store/posts';

export default function Create({ navigation }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function createNewPost() {
    if (title.length === 0 && body.length === 0) {
      return;
    }

    try {
      const { data } = await api.post('posts', { userId: 15, title, body });

      dispatch(
        addPost({
          id: data.id + Math.random(),
          userId: data.userId,
          title: data.title,
          body: data.body,
        }),
      );

      setBody('');
      setTitle('');
    } catch (e) {}

    return navigation.replace('List');
  }

  return (
    <>
      <HeaderComponent />

      <Container>
        <Title>Criar</Title>
        <SubTitle>Nova postagem</SubTitle>

        <InputGroup>
          <TitleInput>Título</TitleInput>
          <Input
            onChangeText={text => setTitle(text)}
            value={title}
            maxLength={32}
          />
          <QtdInput>{title.length}/32</QtdInput>
        </InputGroup>
        <InputGroup>
          <TitleInput>Corpo da Postagem</TitleInput>
          <InputTextArea
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setBody(text)}
            value={body}
            maxLength={255}
          />
          <QtdInput>{body.length}/255</QtdInput>
        </InputGroup>

        <ButtonView>
          <Button onPress={() => createNewPost()}>
            <TextButton>Criar</TextButton>
          </Button>
        </ButtonView>
      </Container>
      <Tabs />
    </>
  );
}
