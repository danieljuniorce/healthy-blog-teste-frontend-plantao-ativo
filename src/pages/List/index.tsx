import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  Posts,
  TitlePosts,
  PostsContainer,
} from './styled';

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
  const post = [
    {
      title: 'Um posts qualquer',
      body: 'Hello World Hello World Hello World',
      id: 1,
    },
    {
      title: 'Um posts qualquer',
      body: 'Hello World Hello World Hello World',
      id: 2,
    },
    {
      title: 'Um posts qualquer',
      body: 'Hello World Hello World Hello World',
      id: 3,
    },
    {
      title: 'Um posts qualquer',
      body: 'Hello World Hello World Hello World',
      id: 4,
    },
    {
      title: 'Um posts qualquer',
      body: 'Hello World Hello World Hello World',
      id: 5,
    },
  ];

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
