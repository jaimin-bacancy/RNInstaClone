import { ROUTES } from '@/constants';
import {
  AnimatedDropdown,
  AnimatedFlatList,
  AnimatedSeekBar,
  AnimationListing,
  Chat,
  SharedTransition,
  SoundWave,
  StoryModal,
} from '@/screens';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TabNavigator } from './Tab.navigator';

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
  TabNavigator: undefined;
  Search: undefined;
};

const Stack = createStackNavigator<AuthorizedStackParamList>();

export function AuthorizedNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.TabNavigator}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.TabNavigator} component={TabNavigator} />
      <Stack.Screen
        name={ROUTES.StoryModal}
        component={StoryModal}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name={ROUTES.SharedTransition}
        component={SharedTransition}
      />
      <Stack.Screen
        name={ROUTES.AnimatedFlatList}
        component={AnimatedFlatList}
      />
      <Stack.Screen
        name={ROUTES.AnimationListing}
        component={AnimationListing}
      />
      <Stack.Screen
        name={ROUTES.AnimatedDropdown}
        component={AnimatedDropdown}
      />
      <Stack.Screen name={ROUTES.SoundWave} component={SoundWave} />
      <Stack.Screen name={ROUTES.AnimatedSeekBar} component={AnimatedSeekBar} />
      <Stack.Screen name={ROUTES.Chat} component={Chat} />
    </Stack.Navigator>
  );
}
