/* eslint-disable react/no-unstable-nested-components */
import { Icons } from '@/assets';
import { ROUTES } from '@/constants';
import { useTheme } from '@/hooks';
import { Feed, Profile, Reels, Search, Upload } from '@/screens';
import { Layout, ms } from '@/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

type ScreenOptionsPropTypes = {
  route: RouteProp<ParamListBase>;
};

const Tab = createBottomTabNavigator();

const setTabIcon = (route: RouteProp<ParamListBase>, focused: boolean) => {
  const iconData = {
    name: Icons.filled_home,
    width: ms(30),
    height: ms(30),
  };

  if (route.name === ROUTES.Feed) {
    iconData.name = focused ? Icons.filled_home : Icons.home;
    iconData.width = ms(28);
    iconData.height = ms(28);
  } else if (route.name === ROUTES.Search) {
    iconData.name = focused ? Icons.filled_search : Icons.search;
  } else if (route.name === ROUTES.Upload) {
    iconData.name = focused ? Icons.upload : Icons.upload;
  } else if (route.name === ROUTES.Reels) {
    iconData.name = focused ? Icons.filled_reel : Icons.reel;
    iconData.width = ms(24);
    iconData.height = ms(24);
  } else if (route.name === ROUTES.Profile) {
    iconData.name = focused ? Icons.filled_profile : Icons.profile;
  }

  return iconData;
};

const TabIcon = ({ data }) => {
  const { colors } = useTheme();

  return (
    <View style={{ height: data.height, width: data.width }}>
      <Image
        source={data.name}
        resizeMode="contain"
        style={{
          ...Layout.fullSize,
          tintColor: colors.black,
        }}
      />
    </View>
  );
};

export function TabNavigator() {
  const { colors } = useTheme();

  function TabBarIcon(route: RouteProp<ParamListBase>, focused: boolean) {
    const iconData = setTabIcon(route, focused);

    return <TabIcon data={iconData} />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }: ScreenOptionsPropTypes) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.background },
        tabBarIcon: ({ focused }) => TabBarIcon(route, focused),
      })}>
      <Tab.Screen name={ROUTES.Feed} component={Feed} />
      <Tab.Screen name={ROUTES.Search} component={Search} />
      <Tab.Screen name={ROUTES.Upload} component={Upload} />
      <Tab.Screen name={ROUTES.Reels} component={Reels} />
      <Tab.Screen name={ROUTES.Profile} component={Profile} />
    </Tab.Navigator>
  );
}
