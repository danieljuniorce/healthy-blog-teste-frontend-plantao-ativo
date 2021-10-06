import React, { useEffect /*, useState*/ } from 'react';
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
//import Loading from '../../components/Loading';
import Field from '../../components/Field';
export default function Search() {
  const favorites = useSelector((state: RootState) => state.favorites);
  return (
    <>
      <HeaderComponent />

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
                <Field
                  key={item.id}
                  title={item.title}
                  body={item.body}
                  item={item}
                />
              )}
            />
          )}
        </Posts>
      </Container>
      <Tabs />
    </>
  );
}
