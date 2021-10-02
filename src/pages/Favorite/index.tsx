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

export default function Create() {
  const favorite = [
    {
      id: 1,
      title: 'Titulo Qualquer',
      body: 'Corpo do corpo do corpo',
    },
    {
      id: 2,
      title: 'Titulo Qualquer',
      body: 'Corpo do corpo do corpo',
    },
    {
      id: 3,
      title: 'Titulo Qualquer',
      body: 'Corpo do corpo do corpo',
    },
    {
      id: 4,
      title: 'Titulo Qualquer',
      body: 'Corpo do corpo do corpo',
    },
  ];

  return (
    <>
      <HeaderComponent />

      <Container>
        <Title>Favoritos</Title>
        <SubTitle>Postagens favoritas</SubTitle>

        <Posts>
          <TitlePosts>Veja todas as postagens favoritadas</TitlePosts>
          <PostsContainer
            data={favorite}
            renderItem={({ item }: any) => (
              <FieldComponent
                key={item.id}
                title={item.title}
                body={item.body}
                favorite={true}
              />
            )}
          />
        </Posts>
      </Container>
      <Tabs />
    </>
  );
}
