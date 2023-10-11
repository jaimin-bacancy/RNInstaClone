import { Home, StoryModal } from '@/screens';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

export type AuthorizedStackParamList = {
  Home: undefined;
  StoryModal: {
    storyId: string;
  };
};

const Stack = createStackNavigator<AuthorizedStackParamList>();

export function AuthorizedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="StoryModal"
        component={StoryModal}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
}
