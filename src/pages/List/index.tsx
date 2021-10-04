import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import api from '../../api';
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

type PostType = [
  {
    title: string;
    body: string;
    id: number;
  },
];

export default function Search() {
  const [posts, setPosts]: any = useState([]);
  const [loading, setLoading] = useState(false);

  const userPosts: any = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    setPosts(userPosts);
    async function handleGetPosts() {
      setLoading(true);

      try {
        const { data } = await api.get('posts');

        setPosts([...userPosts, ...data]);

        setLoading(false);
        return;
      } catch (e) {
        setLoading(false);
        return;
      }
    }

    handleGetPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderComponent />

      <Container>
        <Title>Postagens</Title>
        <SubTitle>Listagem das Postagens</SubTitle>

        <Posts>
          <TitlePosts>Veja todas as postagens</TitlePosts>
          <PostsContainer
            data={posts}
            renderItem={({ item }: any) => (
              <FieldComponent
                key={item.id}
                title={item.title}
                body={item.body}
                favorite={false}
                item={item}
              />
            )}
          />
        </Posts>
      </Container>
      <Tabs />
    </>
  );
}
/*

*/
