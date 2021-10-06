import React /*, { useEffect, useState }*/ from 'react';
//import { useSelector } from 'react-redux';

//import { RootState } from '../../store';
//import api from '../../api';
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
import Loading from '../../components/Loading';
//import Field from '../../components/Field';

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

        <Loading />
      </Container>
      <Tabs />
    </>
  );
}
