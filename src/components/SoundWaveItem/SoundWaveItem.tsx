import { useStyle } from '@/hooks';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import style from './SoundWaveItem.styles';

const DURATION = 500;

type SoundWaveItem = {
  height?: any;
  width?: any;
};

export function SoundWaveItem({
  height = 20,
  width = 4,
}: SoundWaveItem): JSX.Element {
  const { styles } = useStyle(style);

  const minHeight = height / 2;
  const maxHeight = height;

  const sharedValue1 = useSharedValue(minHeight);
  const sharedValue2 = useSharedValue(maxHeight);

  const reanimated1Style = useAnimatedStyle(() => ({
    height: sharedValue1.value,
  }));

  const reanimated2Style = useAnimatedStyle(() => ({
    height: sharedValue2.value,
  }));

  const startAnimation = () => {
    sharedValue1.value = withRepeat(
      withTiming(sharedValue1.value >= minHeight ? maxHeight : minHeight, {
        duration: DURATION,
      }),
      -1,
      true,
    );
    sharedValue2.value = withRepeat(
      withTiming(sharedValue2.value >= maxHeight ? minHeight : maxHeight, {
        duration: DURATION,
      }),
      -1,
      true,
    );
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.viewMusicController}>
      <Animated.View
        style={[
          styles.viewStartEndLine,
          { width, height: minHeight },
          reanimated1Style,
        ]}
      />
      <Animated.View
        style={[
          styles.viewCenterLine,
          { width, height: maxHeight },
          reanimated2Style,
        ]}
      />
      <Animated.View
        style={[
          styles.viewStartEndLine,
          { width, height: minHeight },
          reanimated1Style,
        ]}
      />
    </View>
  );
}
