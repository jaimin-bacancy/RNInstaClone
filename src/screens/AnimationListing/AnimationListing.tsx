import { AnimationListingItem } from '@/components';
import { useStyle } from '@/hooks';
import { navigate } from '@/navigators/NavigationRef';
import React from 'react';
import { FlatList, View } from 'react-native';
import style from './AnimationListing.styles';

const list = [
  {
    name: 'Sound Wave',
    screen: 'SoundWave',
  },
  {
    name: 'FlatList',
    screen: 'AnimatedFlatList',
  },
  {
    name: 'Seek Bar',
    screen: 'AnimatedSeekBar',
  },
  {
    name: 'Shared Transition',
    screen: 'SharedTransition',
  },
  {
    name: 'DropDown',
    screen: 'AnimatedDropdown',
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
