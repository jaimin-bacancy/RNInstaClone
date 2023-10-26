/* eslint-disable react/no-unstable-nested-components */
import { Icons } from '@/assets';
import { ROUTES } from '@/constants';
import { useStyle, useTheme } from '@/hooks';
import { Layout, ms, vs } from '@/theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import style from './Navigator.styles';

type ScreenOptionsPropTypes = {
  route: RouteProp<ParamListBase>;
};

const Tab = createMaterialTopTabNavigator();

const setTabIcon = (route: RouteProp<ParamListBase>) => {
  const iconData = {
    name: Icons.grid,
    width: ms(30),
    height: ms(30),
  };

  if (route.name === ROUTES.Posts) {
    iconData.name = Icons.grid;
  } else if (route.name === ROUTES.Videos) {
    iconData.name = Icons.reel;
    iconData.width = ms(26);
    iconData.height = ms(26);
  } else if (route.name === ROUTES.Tags) {
    iconData.name = Icons.userTag;
  }

  return iconData;
};

const TabIcon = ({ data, focused }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[Layout.selfCenter, { height: data.height, width: data.width }]}>
      <Image
        source={data.name}
        resizeMode="contain"
        style={{
          ...Layout.fullSize,
          tintColor: focused ? colors.black : colors.textGray400,
        }}
      />
    </View>
  );
};

const Posts = ({ posts, styles }) => {
  return (
    // <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollPost}>
    <View style={styles.postsContainer}>
      {posts.map((item, index) => {
        return (
          <View key={index}>
            <View style={styles.viewPost} />
          </View>
        );
      })}
    </View>
    // </ScrollView>
  );
};

const Video = ({ videos, styles }) => {
  return (
    // <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollPost}>
    <View style={styles.postsContainer}>
      {videos.map((item, index) => {
        return (
          <View key={index}>
            <View style={styles.viewVideo} />
          </View>
        );
      })}
    </View>
    // </ScrollView>
  );
};

const Tags = ({ tags, styles }) => {
  return (
    // <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollPost}>
    <View style={styles.postsContainer}>
      {tags.map((item, index) => {
        return (
          <View key={index}>
            <View style={styles.viewPost} />
          </View>
        );
      })}
    </View>
    // </ScrollView>
  );
};

export function ProfileTabNavigator() {
  const { colors } = useTheme();
  const { styles } = useStyle(style);

  function TabBarIcon(route: RouteProp<ParamListBase>, focused: boolean) {
    const iconData = setTabIcon(route);

    return <TabIcon data={iconData} focused={focused} />;
  }

  const data = Array.apply(null, Array(10)).map(function (y, i) {
    return i;
  });

  return (
    <Tab.Navigator
      style={styles.tabContainer}
      screenOptions={({ route }: ScreenOptionsPropTypes) => ({
        headerShown: false,
        tabBarScrollEnabled: false,
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { backgroundColor: colors.black },
        tabBarStyle: { backgroundColor: colors.background, height: vs(50) },
        tabBarIcon: ({ focused }) => TabBarIcon(route, focused),
      })}>
      <Tab.Screen
        name={ROUTES.Posts}
        component={() => <Posts posts={data} styles={styles} />}
      />
      <Tab.Screen
        name={ROUTES.Videos}
        component={() => <Video videos={data} styles={styles} />}
      />
      <Tab.Screen
        name={ROUTES.Tags}
        component={() => <Tags tags={data} styles={styles} />}
      />
    </Tab.Navigator>
  );
}
