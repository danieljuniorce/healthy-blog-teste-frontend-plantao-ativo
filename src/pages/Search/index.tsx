import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import api from '../../api';
import { IPostsResponse } from '../../interface';
import {
  Container,
  Title,
  SubTitle,
  ResponseView,
  TitleResponse,
  ButtonSearch,
  TextButtonSearch,
  InputGroup,
  InputSearch,
} from './styled';

import { Header, Field, Tabs, Loading } from '../../components';

export default function Search() {
  const [title, setTitle] = useState<string>('');
  const [post, setPost] = useState<IPostsResponse | any>({});
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

  async function handleGetPostTitle() {
    Keyboard.dismiss();
    setLoading(true);
    try {
      if (post[0] && post[0].title === title) {
        return;
      }
      const response = await api.get(`posts?title=${title.toLowerCase()}`);

      setPost(response.data);
      return setLoading(false);
    } catch (e) {
      return setLoading(false);
    }
  }

  return (
    <>
      <Header />

      <Container>
        <Title>Procurar</Title>
        <SubTitle>Digite o título da postagem</SubTitle>

        <InputGroup>
          <InputSearch
            placeholder="Insirar o título da postagem"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <ButtonSearch onPress={() => handleGetPostTitle()}>
            <TextButtonSearch>&copy;</TextButtonSearch>
          </ButtonSearch>
        </InputGroup>

        <ResponseView>
          <TitleResponse>Resultados encontrados</TitleResponse>

          {loading === true ? (
            <Loading />
          ) : post[0] ? (
            <Field title={post[0].title} item={post[0]} />
          ) : undefined}
        </ResponseView>
      </Container>

      <Tabs KeyboardShow={keyboarStatus} />
    </>
  );
}
