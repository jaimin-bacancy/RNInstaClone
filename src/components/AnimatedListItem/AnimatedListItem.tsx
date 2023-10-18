import { useStyle } from '@/hooks';
import React from 'react';
import { ViewToken } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import style from './AnimatedListItem.styles';

type AnimatedListItemProps = {
  viewableItems: SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};

export function AnimatedListItem({
  item,
  viewableItems,
}: AnimatedListItemProps) {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(element => element.isViewable)
        .find(viewableItem => viewableItem.item.id === item.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.8),
        },
      ],
    };
  }, []);

  const { styles } = useStyle(style);

  return <Animated.View style={[styles.container, rStyle]} />;
}
