import React from 'react';

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
} from './styled';

import HeaderComponent from '../../components/Header';
import Tabs from '../../components/Tab';

export default function Create() {
  return (
    <>
      <HeaderComponent />

      <Container>
        <Title>Visualizar</Title>

        <PostView>
          <InfoView>
            <TitleInfo>Titulo da Postagem</TitleInfo>
            <FavoritePost>
              <TextFavoritePost>&copy;</TextFavoritePost>
            </FavoritePost>
          </InfoView>
          <BodyPost>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </BodyPost>
          <DeletePost>
            <TextDeletePost>Deletar Postagem</TextDeletePost>
          </DeletePost>
        </PostView>
      </Container>
      <Tabs />
    </>
  );
}
