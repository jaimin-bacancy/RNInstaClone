import {
  AnimatedDropdown,
  AnimatedFlatList,
  AnimatedSeekBar,
  AnimationListing,
  Chat,
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
  AnimatedSeekBar: undefined;
  Chat: undefined;
};

const Stack = createStackNavigator<AuthorizedStackParamList>();

export function AuthorizedNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{ headerShown: false }}>
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
      <Stack.Screen name="AnimatedSeekBar" component={AnimatedSeekBar} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
