import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import { Main, Create, List, Search, Favorite, View } from '../pages';

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Main" component={Main} />
      <AppStack.Screen name="Create" component={Create} />
      <AppStack.Screen name="List" component={List} />
      <AppStack.Screen name="Search" component={Search} />
      <AppStack.Screen name="Favorite" component={Favorite} />
      <AppStack.Screen name="View" component={View} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
