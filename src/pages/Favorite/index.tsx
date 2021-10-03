import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
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
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <>
      <HeaderComponent />

      <Container>
        <Title>Favoritos</Title>
        <SubTitle>Postagens favoritas</SubTitle>

        <Posts>
          <TitlePosts>Veja todas as postagens favoritadas</TitlePosts>
          <PostsContainer
            data={favorites}
            renderItem={({ item }: any) => (
              <FieldComponent
                key={item.id}
                title={item.title}
                body={item.body}
                favorite={item.favorite}
              />
            )}
          />
        </Posts>
      </Container>
      <Tabs />
    </>
  );
}
