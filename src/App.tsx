/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ApplicationNavigator } from '@/navigators/Application.navigator';
import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Layout } from './theme';

function App(): JSX.Element {
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <ApplicationNavigator />
    </GestureHandlerRootView>
  );
}

export default App;
