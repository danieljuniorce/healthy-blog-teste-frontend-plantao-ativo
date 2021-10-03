import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  ResponseView,
  TitleResponse,
  ButtonSearch,
  TextButtonSearch,
  InputGroup,
  InputSearch,
} from './styled';

import HeaderComponent from '../../components/Header';
import Tabs from '../../components/Tab';
import Field from '../../components/Field';

export default function Create() {
  return (
    <>
      <HeaderComponent />

      <Container>
        <Title>Procurar</Title>
        <SubTitle>Digite o título da postagem</SubTitle>

        <InputGroup>
          <InputSearch placeholder="Insirar o título da postagem" />
          <ButtonSearch>
            <TextButtonSearch>&copy;</TextButtonSearch>
          </ButtonSearch>
        </InputGroup>

        <ResponseView>
          <TitleResponse>Resultados encontrados (0)</TitleResponse>

          <Field
            favorite={true}
            title="Minhas Postagem Favorita"
            body="sdasd sada sdasd adas dasdsdasdsa sdas a ssada sdasdasdasd"
          />
        </ResponseView>
      </Container>
      <Tabs />
    </>
  );
}
