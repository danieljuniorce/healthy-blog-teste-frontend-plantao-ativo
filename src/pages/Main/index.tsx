import React from 'react';

import {
  Container,
  Title,
  SubTitleView,
  SubTitlePrimary,
  SubInfos,
  FavoriteTitlePost,
} from './styled';

import HeaderComponent from '../../components/Header';
import FieldComponent from '../../components/Field';
import Tabs from '../../components/Tab';

export default function Main() {
  return (
    <>
      <HeaderComponent />
      <Container>
        <Title>Início</Title>
        <SubTitleView>
          <SubTitlePrimary>Bem-vindo ao seu Blog</SubTitlePrimary>
          <SubInfos>seg, 10:10:10</SubInfos>
        </SubTitleView>

        <FavoriteTitlePost>
          Ultimas três postagens favoritadas
        </FavoriteTitlePost>

        <FieldComponent
          favorite={true}
          title="Minhas Postagem Favorita"
          body="sdasd sada sdasd adas dasdsdasdsa sdas a ssada sdasdasdasd"
        />
        <FieldComponent
          favorite={true}
          title="Minhas Postagem Favorita"
          body="sdasd sada sdasd adas dasdsdasdsa sdas a ssada sdasdasdasd"
        />

        <FieldComponent
          favorite={true}
          title="Minhas Postagem Favorita"
          body="sdasd sada sdasd adas dasdsdasdsa sdas a ssada sdasdasdasd"
        />
      </Container>

      <Tabs />
    </>
  );
}
