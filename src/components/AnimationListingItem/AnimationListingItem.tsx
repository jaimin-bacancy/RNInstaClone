import { useStyle } from '@/hooks';
import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import style from './AnimationListingItem.styles';

type AnimationListingItemProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  item: {
    name: string;
  };
};

export function AnimationListingItem({
  item,
  onPress,
}: AnimationListingItemProps) {
  const { styles } = useStyle(style);

  return (
    <Animated.View>
      <TouchableOpacity onPress={onPress} style={[styles.container]}>
        <Text style={styles.textName} numberOfLines={1}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
