import React, { useEffect, useState } from 'react';
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
import Field from '../../components/Field';
import Tabs from '../../components/Tab';

interface IFavorite {
  id: number;
  title: string;
  body: string;
  favorite: boolean;
}

export default function Main() {
  const posts = useSelector((state: RootState) => state.posts);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const date = new Date();
    setTimeout(() => setTime(date), 1000);
  });

  const msgDate = `${time.toDateString()}, ${
    time.getHours() <= 9 ? '0' + time.getHours() : time.getHours()
  }:${time.getMinutes() <= 9 ? '0' + time.getMinutes() : time.getMinutes()}:${
    time.getSeconds() <= 9 ? '0' + time.getSeconds() : time.getSeconds()
  }`;

  return (
    <>
      <HeaderComponent />
      <Container>
        <Title>Início</Title>
        <SubTitleView>
          <SubTitlePrimary>Bem-vindo ao seu Blog</SubTitlePrimary>
          <SubInfos>{msgDate}</SubInfos>
        </SubTitleView>

        <FavoriteTitlePost>Minhas postagens</FavoriteTitlePost>
        {posts.length === 0 ? (
          <FavoriteTitlePost>
            No momento você não criou nenhuma postagem.
          </FavoriteTitlePost>
        ) : (
          <PostsContainer
            data={posts}
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
      </Container>

      <Tabs />
    </>
  );
}

/*
        {favorites.map((favorite: IFavorite, index: number) =>
          index <= 2 ? (
            <Field
              favorite={favorite.favorite}
              key={index}
              title={favorite.title}
              body={favorite.title}
            />
          ) : undefined,
        )}
*/
