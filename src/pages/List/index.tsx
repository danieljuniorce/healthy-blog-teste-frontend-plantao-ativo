import React, { useEffect, useState } from 'react';

import {
  Container,
  Title,
  SubTitle,
  Posts,
  TitlePosts,
  PostsContainer,
} from './styled';

import api from '../../api';

import HeaderComponent from '../../components/Header';
import Tabs from '../../components/Tab';
import FieldComponent from '../../components/Field';

type PostType = [
  {
    title: string;
    body: string;
    id: number;
  },
];

export default function Create() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      try {
        const response = await api.get('posts');
        setPost(response.data);
      } catch (e) {}
    }

    getPost();
  }, []);

  return (
    <>
      <HeaderComponent />

      <Container>
        <Title>Postagens</Title>
        <SubTitle>Listagem das Postagens</SubTitle>

        <Posts>
          <TitlePosts>Veja todas as postagens</TitlePosts>
          <PostsContainer
            data={post}
            renderItem={({ item }: any) => (
              <FieldComponent
                key={item.id}
                title={item.title}
                body={item.body}
                favorite={false}
              />
            )}
          />
        </Posts>
      </Container>
      <Tabs />
    </>
  );
}
