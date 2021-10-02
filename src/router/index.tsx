import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from '../pages/Main';
import Create from '../pages/Create';
import List from '../pages/List';
import Search from '../pages/Search';

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Main" component={Main} />
      <AppStack.Screen name="Create" component={Create} />
      <AppStack.Screen name="List" component={List} />
      <AppStack.Screen name="Search" component={Search} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
