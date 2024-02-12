import { AnimationListingItem } from '@/components';
import { ROUTES } from '@/constants';
import { useStyle } from '@/hooks';
import { navigate } from '@/navigators/NavigationRef';
import React from 'react';
import { FlatList, View } from 'react-native';
import style from './AnimationListing.styles';

const list = [
  {
    name: 'Sound Wave',
    screen: ROUTES.SoundWave,
  },
  {
    name: 'FlatList',
    screen: ROUTES.AnimatedFlatList,
  },
  {
    name: 'Seek Bar',
    screen: ROUTES.AnimatedSeekBar,
  },
  {
    name: 'Shared Transition',
    screen: ROUTES.SharedTransition,
  },
  {
    name: 'DropDown',
    screen: ROUTES.AnimatedDropdown,
  },
  {
    name: 'Animated Add To Cart Button',
    screen: ROUTES.AnimatedAddToCartButton,
  },
];

export function AnimationListing(): JSX.Element {
  const { styles } = useStyle(style);

  const navigateTo = item => {
    navigate(item.screen);
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        data={list}
        numColumns={2}
        contentContainerStyle={styles.listView}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemView}>
              <AnimationListingItem
                key={index}
                item={item}
                onPress={() => navigateTo(item)}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
