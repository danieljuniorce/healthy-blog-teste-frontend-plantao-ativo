import React, { useState } from 'react';

import api from '../../api';
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

import HeaderComponent from '../../components/Header';
import Tabs from '../../components/Tab';
import Field from '../../components/Field';

export default function Search() {
  const [title, setTitle] = useState('');
  const [post, setPost]: any = useState({});

  async function handleGetPostTitle() {
    try {
      if (post[0] && post[0].title === title) {
        return;
      }
      const response = await api.get(`posts?title=${title}`);

      setPost(response.data);
      console.log(post);
    } catch (e) {}
  }

  return (
    <>
      <HeaderComponent />

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

          {post[0] ? (
            <Field title={post[0].title} body={post[0].body} item={post[0]} />
          ) : undefined}
        </ResponseView>
      </Container>
      <Tabs />
    </>
  );
}

/**

 */
