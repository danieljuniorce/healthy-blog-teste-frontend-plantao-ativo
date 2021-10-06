import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NetInfo from '@react-native-community/netinfo';

import { addFavorite, delFavorite } from '../../store/favorites';
import { RootState } from '../../store';
import { delPost } from '../../store/posts';
import { IPostsResponse } from '../../interface';

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
import { Header, Tabs, Loading } from '../../components';
import api from '../../api';

export default function View({ route, navigation }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const [post, setPost] = useState<IPostsResponse | any>({});
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(false);
  const [netStatus, setNetStatus] = useState(false);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNetStatus(state.isConnected);
    });

    const item = route.params.item;
    setPost(item);

    setFavorite(favorites.filter(fav => fav.id === route.params.item.id));

    return () => {};
  }, [favorites, route, netStatus]);

  async function handleDeletePost() {
    setLoading(true);
    try {
      await api.delete(`posts/${post.id}`);
      if (favorite[0]) {
        dispatch(delFavorite(post.id));
      }
      dispatch(delPost(post.id));
      setPost({});
      setLoading(false);
      navigation.replace('Main');
      return;
    } catch (e) {
      return setLoading(false);
    }
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

        {loading === true ? (
          <Loading />
        ) : (
          <>
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
            {netStatus === true ? (
              post.userId === 15 ? (
                <DeletePost onPress={() => handleDeletePost()}>
                  <TextDeletePost>Deletar minha Postagem</TextDeletePost>
                </DeletePost>
              ) : undefined
            ) : (
              <DeletePost>
                <TextDeletePost>
                  Verifique sua conexão com a internet para deletar sua postagem
                </TextDeletePost>
              </DeletePost>
            )}
          </>
        )}
      </Container>
      <Tabs />
    </>
  );
}
