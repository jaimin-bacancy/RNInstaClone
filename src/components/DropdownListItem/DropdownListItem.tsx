/* eslint-disable react-native/no-inline-styles */
import { useStyle } from '@/hooks';
import Color from 'color';
import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import style from './DropdownListItem.styles';

type DropdownItemType = {
  label: string;
};

type DropdownListItemProps = DropdownItemType & {
  index: number;
  dropdownItemsCount: number;
  isExpanded: SharedValue<boolean>;
};

export function DropdownListItem({
  label,
  index,
  dropdownItemsCount,
  isExpanded,
}: DropdownListItemProps) {
  const { width: windowWidth } = useWindowDimensions();
  const DropdownListItemHeight = 40;
  const Margin = 4;

  const fullDropdownHeight = dropdownItemsCount * DropdownListItemHeight;

  const collapsedTop = fullDropdownHeight / 2 - DropdownListItemHeight * 2;
  const expandedTop = (DropdownListItemHeight + Margin) * index;

  const expandedBackgroundColor = '#1B1B1B';
  const collapsedBackgroundColor = Color(expandedBackgroundColor)
    .lighten(index * 0.25)
    .hex();

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isExpanded.value ? expandedBackgroundColor : collapsedBackgroundColor,
      ),
      top:
        index !== 0
          ? withSpring(isExpanded.value ? expandedTop : collapsedTop, {
              damping: 20,
            })
          : 0,
    };
  }, []);

  const isHeader = index === 0;

  const { styles } = useStyle(style);

  return (
    <Animated.View
      onTouchEnd={() => {
        isExpanded.value = !isExpanded.value;
      }}
      style={[
        {
          zIndex: dropdownItemsCount - index,
          position: 'absolute',
          width: windowWidth - 20,
          height: DropdownListItemHeight,
          borderRadius: 4,
        },
        rStyle,
      ]}>
      <View style={styles.container}>
        <Text style={[styles.label, isHeader && styles.headerLabel]}>
          {label}
        </Text>
      </View>
    </Animated.View>
  );
}
