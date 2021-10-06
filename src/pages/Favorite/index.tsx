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

import { Header, Tabs, Field } from '../../components';

export default function Search() {
  const favorites = useSelector((state: RootState) => state.favorites);
  return (
    <>
      <Header />

      <Container>
        <Title>Favoritos</Title>
        <SubTitle>Postagens favoritas</SubTitle>

        <Posts>
          <TitlePosts>Veja todas as postagens favoritadas</TitlePosts>
          {favorites.length === 0 ? (
            <TitlePosts>Você ainda não favoritou nenhuma postagem.</TitlePosts>
          ) : (
            <PostsContainer
              data={favorites}
              renderItem={({ item }: any) => (
                <Field key={item.id} title={item.title} item={item} />
              )}
            />
          )}
        </Posts>
      </Container>
      <Tabs />
    </>
  );
}
