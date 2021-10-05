import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import {
  Container,
  Title,
  SubTitleView,
  SubTitlePrimary,
  SubInfos,
  FavoriteTitlePost,
  PostsContainer,
} from './styled';

import HeaderComponent from '../../components/Header';
import FieldComponent from '../../components/Field';
import Tabs from '../../components/Tab';

interface IFavorite {
  id: number;
  title: string;
  body: string;
  favorite: boolean;
}

export default function Main() {
  const posts = useSelector((state: RootState) => state.posts);

  return (
    <>
      <HeaderComponent />
      <Container>
        <Title>Início</Title>
        <SubTitleView>
          <SubTitlePrimary>Bem-vindo ao seu Blog</SubTitlePrimary>
          <SubInfos>seg, 10:10:10</SubInfos>
        </SubTitleView>

        <FavoriteTitlePost>Minhas postagens</FavoriteTitlePost>

        <PostsContainer
          data={posts}
          renderItem={({ item }: any) => (
            <FieldComponent
              key={item.id}
              title={item.title}
              body={item.body}
              favorite={item.favorite}
              item={item}
            />
          )}
        />
      </Container>

      <Tabs />
    </>
  );
}

/*
        {favorites.map((favorite: IFavorite, index: number) =>
          index <= 2 ? (
            <FieldComponent
              favorite={favorite.favorite}
              key={index}
              title={favorite.title}
              body={favorite.title}
            />
          ) : undefined,
        )}
*/
