import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ListRenderItemInfo } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import LottieFile from 'lottie-react-native';

import api from '../../api';
import { IPosts, IPostsResponse } from '../../interface';
import {
  Container,
  Title,
  SubTitle,
  Posts,
  TitlePosts,
  PostsContainer,
} from './styled';
import { Header, Tabs, Field, Loading } from '../../components';
import wifi from '../../assets/lottie/wifi.json';

export default function Search() {
  const [posts, setPosts] = useState<IPostsResponse | any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [netStatus, setNetStatus] = useState<boolean>(false);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNetStatus(state.isConnected);
    });

    async function handleGetPosts() {
      setLoading(true);

      try {
        const response: IPostsResponse = await api.get('posts');

        setPosts(response.data);
        setLoading(false);
        return;
      } catch (e) {
        setLoading(false);
        return;
      }
    }

    handleGetPosts();
    return () => {};
  }, [netStatus]);

  return (
    <>
      <Header />

      <Container>
        <Title>Postagens</Title>
        <SubTitle>Listagem das Postagens</SubTitle>

        <Posts>
          <TitlePosts>Veja todas as postagens</TitlePosts>
          {netStatus === true ? (
            loading === true ? (
              <Loading />
            ) : (
              <PostsContainer
                data={posts}
                renderItem={({ item }: ListRenderItemInfo<IPosts>) => (
                  <Field key={item.id} title={item.title} item={item} />
                )}
              />
            )
          ) : (
            <View style={styles.viewAnimation}>
              <LottieFile
                source={wifi}
                loop
                autoPlay
                style={styles.animationFile}
              />
              <Text style={styles.textAnimation}>Verifique sua Conexão</Text>
            </View>
          )}
        </Posts>
      </Container>
      <Tabs />
    </>
  );
}

const styles = StyleSheet.create({
  viewAnimation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  animationFile: {
    width: 200,
  },
  textAnimation: {
    fontSize: 19,
    fontWeight: '700',
  },
});
