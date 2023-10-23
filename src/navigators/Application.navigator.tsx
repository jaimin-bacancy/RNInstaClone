import { useTheme } from '@/hooks';
import { navigationRef } from '@/navigators/NavigationRef';
import { Layout } from '@/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AuthorizedNavigator } from './Authorized.navigator';

type ApplicationStackParamList = {
  Startup: undefined;
  AuthNavigator: undefined;
  AuthorizedNavigator: undefined;
};

const Stack = createStackNavigator<ApplicationStackParamList>();

export function ApplicationNavigator() {
  const { barStyle, colors } = useTheme();

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.background }]}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={barStyle} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="AuthorizedNavigator"
            component={AuthorizedNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
