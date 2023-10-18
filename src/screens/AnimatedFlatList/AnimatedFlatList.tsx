import { AnimatedListItem } from '@/components';
import { useStyle } from '@/hooks';
import React from 'react';
import { FlatList, View, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import style from './AnimatedFlatList.styles';

const data = new Array(50).fill(0).map((_, index) => ({ id: index }));

export function AnimatedFlatList(): JSX.Element {
  const { styles } = useStyle(style);

  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={[styles.container]}>
      <FlatList
        data={data}
        contentContainerStyle={styles.listContainer}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => {
          return <AnimatedListItem item={item} viewableItems={viewableItems} />;
        }}
      />
    </View>
  );
}
