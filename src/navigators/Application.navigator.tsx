import { useTheme } from '@/hooks';
import { navigationRef } from '@/navigators/NavigationRef';
import { Startup } from '@/screens';
import { Layout } from '@/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AuthNavigator } from './Auth.navigator';
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
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          <Stack.Screen
            name="AuthorizedNavigator"
            component={AuthorizedNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
