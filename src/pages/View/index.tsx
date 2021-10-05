import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addFavorite, delFavorite } from '../../store/favorites';
import { RootState } from '../../store';
import {
  Container,
  Title,
  PostView,
  InfoView,
  TitleInfo,
  FavoritePost,
  TextFavoritePost,
  BodyPost,
  DeletePost,
  TextDeletePost,
  BackTouch,
  TitleBackTouch,
} from './styled';

import HeaderComponent from '../../components/Header';
import Tabs from '../../components/Tab';
import { delPost } from '../../store/posts';

export default function View({ route, navigation }: any) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const [post, setPost]: any = useState({});
  const [favorite, setFavorite]: any = useState([]);

  useEffect(() => {
    const item = route.params.item;
    setPost(item);
    navigation.addListener('focus', () =>
      setFavorite(favorites.filter(fav => fav.id === route.params.item.id)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.id]);

  async function handleDeletePost() {
    dispatch(delPost(post.id));
    setPost({});
    navigation.replace('Main');
    return;
  }

  async function handleFavoritePost() {
    if (favorite[0]) {
      dispatch(delFavorite(post.id));
      setFavorite([]);

      return;
    }

    dispatch(addFavorite(post.id));
    setFavorite([{ id: post.id }]);
    return;
  }

  function handleBackToList() {
    return navigation.replace('List');
  }

  return (
    <>
      <HeaderComponent />

      <Container>
        <BackTouch>
          <TitleBackTouch onPress={() => handleBackToList()}>
            Voltar
          </TitleBackTouch>
        </BackTouch>
        <Title>Visualizar</Title>

        <PostView>
          <InfoView>
            <TitleInfo>{post.title}</TitleInfo>
            <FavoritePost onPress={() => handleFavoritePost()}>
              <TextFavoritePost>
                {favorite.length === 0 ? 'F' : 'V'}
              </TextFavoritePost>
            </FavoritePost>
          </InfoView>
          <BodyPost>{post.body}</BodyPost>
        </PostView>

        {post.userId === 15 ? (
          <DeletePost onPress={() => handleDeletePost()}>
            <TextDeletePost>Deletar Postagem</TextDeletePost>
          </DeletePost>
        ) : undefined}
      </Container>
      <Tabs />
    </>
  );
}
