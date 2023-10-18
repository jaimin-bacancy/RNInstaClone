import {
  AnimatedDropdown,
  AnimatedFlatList,
  AnimationListing,
  Feed,
  SharedTransition,
  SoundWave,
  StoryModal,
} from '@/screens';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

export type AuthorizedStackParamList = {
  Feed: undefined;
  StoryModal: {
    storyId: string;
  };
  SharedTransition: undefined;
  AnimatedFlatList: undefined;
  AnimationListing: undefined;
  AnimatedDropdown: undefined;
  SoundWave: undefined;
};

const Stack = createStackNavigator<AuthorizedStackParamList>();

export function AuthorizedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen
        name="StoryModal"
        component={StoryModal}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen name="SharedTransition" component={SharedTransition} />
      <Stack.Screen name="AnimatedFlatList" component={AnimatedFlatList} />
      <Stack.Screen name="AnimationListing" component={AnimationListing} />
      <Stack.Screen name="AnimatedDropdown" component={AnimatedDropdown} />
      <Stack.Screen name="SoundWave" component={SoundWave} />
    </Stack.Navigator>
  );
}
