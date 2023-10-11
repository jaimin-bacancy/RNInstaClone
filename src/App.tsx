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

function App(): JSX.Element {
  LogBox.ignoreAllLogs();

  return <ApplicationNavigator />;
}

export default App;
