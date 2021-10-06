import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
          <TabText>
            <Icon name="home" />
          </TabText>
          <TabText>Iníco</TabText>
        </TabItem>
        <TabItem onPress={() => handleNavigation('List')}>
          <TabText>
            <Icon name="list" />
          </TabText>
          <TabText>Lista</TabText>
        </TabItem>
        <TabItem onPress={() => handleNavigation('Create')}>
          <TabText>
            <Icon name="plus" />
          </TabText>
          <TabText>Criar</TabText>
        </TabItem>
        <TabItem onPress={() => handleNavigation('Search')}>
          <TabText>
            <Icon name="search" />
          </TabText>
          <TabText>Procurar</TabText>
        </TabItem>
        <TabItem onPress={() => handleNavigation('Favorite')}>
          <TabText>
            <Icon name="star" />
          </TabText>
          <TabText>Favoritos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
