import { Home } from '@/screens';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

type AuthorizedStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<AuthorizedStackParamList>();

export function AuthorizedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
