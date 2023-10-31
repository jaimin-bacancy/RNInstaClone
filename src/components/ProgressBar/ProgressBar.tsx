import { useStyle } from '@/hooks';
import React from 'react';
import { Animated, LayoutRectangle, View } from 'react-native';
import { ProgressBarProps } from '../StoryModal/types';
import style from './ProgressBar.styles';
import useProgressBar from './hooks/useProgressBar';

export function ProgressBar(props: ProgressBarProps) {
  const { styles } = useStyle(style);
  const { barActiveColor, barInActiveColor, barHeight, scale, setWidth } =
    useProgressBar(props);

  const onLayoutAdded = (evt: LayoutRectangle) => {
    setWidth(evt.width);
  };

  return (
    <View
      onLayout={evt => onLayoutAdded(evt.nativeEvent.layout)}
      style={[
        styles.progressBarContainer,
        {
          backgroundColor: barInActiveColor,
          height: barHeight,
        },
      ]}>
      <Animated.View
        style={[
          styles.progressBarContainer,
          styles.currentBarContainer,
          {
            width: scale,
            backgroundColor: barActiveColor,
            height: barHeight,
          },
        ]}
      />
    </View>
  );
}
