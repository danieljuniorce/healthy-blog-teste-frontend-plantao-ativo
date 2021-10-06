import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Keyboard } from 'react-native';

import { addPost } from '../../store/posts';
import { IPostsResponse } from '../../interface';
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
import { Header, Tabs, Inputs, Button, Loading } from '../../components';

export default function Create({ navigation }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [keyboarStatus, setKeyboarStatus] = useState<boolean>(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      return setKeyboarStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      return setKeyboarStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  async function createNewPost() {
    setLoading(true);
    if (title.length === 0 && body.length === 0) {
      setLoading(false);
      return;
    }

    try {
      const { data }: IPostsResponse = await api.post('posts', {
        userId: 15,
        title,
        body,
      });

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
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }

    return navigation.replace('Main');
  }

  return (
    <>
      <Header />

      <Container>
        <Title>Criar</Title>
        <SubTitle>Nova postagem</SubTitle>

        {loading === true ? (
          <Loading />
        ) : (
          <>
            <InputGroup>
              <TitleInput>Título</TitleInput>
              <Inputs
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
          </>
        )}
      </Container>

      <Tabs KeyboardShow={keyboarStatus} />
    </>
  );
}
