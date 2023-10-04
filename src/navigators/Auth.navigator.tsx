import { SignIn } from '@/screens';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

type AuthStackParamList = {
  SignIn: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
