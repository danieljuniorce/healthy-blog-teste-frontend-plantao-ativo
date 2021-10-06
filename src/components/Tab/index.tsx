import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, TabsContainer, TabItem, TabText } from './styled';

interface KeyboardType {
  KeyboardShow?: boolean;
}

export default function Tabs({ KeyboardShow }: KeyboardType) {
  const navigation = useNavigation();

  function handleNavigation(page: any) {
    navigation.navigate(page);
  }

  return (
    <Container KeyboardShow={KeyboardShow}>
      <TabsContainer>
        <TabItem onPress={() => handleNavigation('Main')}>
          <TabText>+</TabText>
          <TabText>Iníco</TabText>
        </TabItem>
        <TabItem onPress={() => handleNavigation('List')}>
          <TabText>+</TabText>
          <TabText>Ver Postagens</TabText>
        </TabItem>
        <TabItem onPress={() => handleNavigation('Create')}>
          <TabText>+</TabText>
          <TabText>Criar Postagem</TabText>
        </TabItem>
        <TabItem onPress={() => handleNavigation('Search')}>
          <TabText>+</TabText>
          <TabText>Procurar Postagem</TabText>
        </TabItem>
        <TabItem onPress={() => handleNavigation('Favorite')}>
          <TabText>+</TabText>
          <TabText>Postagens Favoritas</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
