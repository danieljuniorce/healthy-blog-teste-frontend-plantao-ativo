import React from 'react';
//import { useSelector } from 'react-redux';

//import { RootState } from '../../store';
import {
  Container,
  Title,
  SubTitle,
  Posts,
  TitlePosts,
  //PostsContainer,
} from './styled';

import HeaderComponent from '../../components/Header';
import Tabs from '../../components/Tab';
//import FieldComponent from '../../components/Field';

export default function Search() {
  return (
    <>
      <HeaderComponent />

      <Container>
        <Title>Favoritos</Title>
        <SubTitle>Postagens favoritas</SubTitle>

        <Posts>
          <TitlePosts>Veja todas as postagens favoritadas</TitlePosts>
        </Posts>
      </Container>
      <Tabs />
    </>
  );
}
/*
          <PostsContainer
            data={favorites}
            renderItem={({ item }: any) => (
              <FieldComponent
                key={item.id}
                title={item.title}
                body={item.body}
                favorite={item.favorite}
                id={item.id}
              />
            )}
          />

  const favorites = useSelector((state: RootState) => state.favorites);
          */
