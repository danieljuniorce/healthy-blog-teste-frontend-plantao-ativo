import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { addFavorite, delFavorite } from '../../store/favorites';
import { RootState } from '../../store';
import { delPost } from '../../store/posts';

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
import { Header, Tabs } from '../../components';

export default function View({ route, navigation }: any) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const [post, setPost]: any = useState({});
  const [favorite, setFavorite]: any = useState([]);

  useEffect(() => {
    const item = route.params.item;
    setPost(item);

    setFavorite(favorites.filter(fav => fav.id === route.params.item.id));

    console.log('View');
  }, [favorites, route]);

  async function handleDeletePost() {
    if (favorite[0]) {
      dispatch(delFavorite(post.id));
    }
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

    dispatch(
      addFavorite({
        id: post.id,
        userId: post.id,
        title: post.title,
        body: post.body,
      }),
    );
    setFavorite([
      { id: post.id, userId: post.id, title: post.title, body: post.body },
    ]);
    return;
  }

  function handleBackToList() {
    return navigation.replace('List');
  }

  return (
    <>
      <Header />

      <Container>
        <BackTouch>
          <TitleBackTouch onPress={() => handleBackToList()}>
            <Icon name="arrow-left" color="#333" /> &nbsp;Voltar
          </TitleBackTouch>
        </BackTouch>
        <Title>Visualizar</Title>

        <PostView>
          <InfoView>
            <TitleInfo>{post.title}</TitleInfo>
            <FavoritePost onPress={() => handleFavoritePost()}>
              <TextFavoritePost>
                {favorite.length === 0 ? (
                  <Icon name="star" size={30} color="#333" />
                ) : (
                  <Icon name="star" size={30} color="#e29d09" solid />
                )}
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
