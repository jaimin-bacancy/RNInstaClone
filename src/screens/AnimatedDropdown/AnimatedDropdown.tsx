import { DropdownListItem } from '@/components';
import { useStyle } from '@/hooks';
import { Layout } from '@/theme';
import React from 'react';
import { View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import style from './AnimatedDropdown.styles';

export function AnimatedDropdown(): JSX.Element {
  const { styles } = useStyle(style);

  const options = [
    { label: 'Select' },
    { label: 'Book' },
    { label: 'Calendar' },
    { label: 'Camera' },
  ];

  const isExpanded: SharedValue<boolean> = useSharedValue(false);

  const backgroundColor = useAnimatedStyle(() => ({
    backgroundColor: withTiming(isExpanded.value ? 'rgba(0,0,0,0.5)' : '#000'),
  }));

  return (
    <Animated.View style={[styles.container, backgroundColor]}>
      <View style={Layout.colCenter}>
        {options.map((item, index) => {
          return (
            <DropdownListItem
              key={index}
              index={index}
              {...item}
              isExpanded={isExpanded}
              dropdownItemsCount={options.length}
            />
          );
        })}
      </View>
    </Animated.View>
  );
}
