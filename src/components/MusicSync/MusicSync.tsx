import { useStyle } from '@/hooks';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import style from './MusicSync.styles';

const DURATION = 500;

export function MusicSync(): JSX.Element {
  const { styles } = useStyle(style);

  const sharedValue1 = useSharedValue(10);
  const sharedValue2 = useSharedValue(20);

  const reanimated1Style = useAnimatedStyle(() => ({
    height: sharedValue1.value,
  }));

  const reanimated2Style = useAnimatedStyle(() => ({
    height: sharedValue2.value,
  }));

  const startAnimation = () => {
    sharedValue1.value = withRepeat(
      withTiming(sharedValue1.value >= 10 ? 20 : 10, {
        duration: DURATION,
      }),
      -1,
      true,
    );
    sharedValue2.value = withRepeat(
      withTiming(sharedValue2.value >= 20 ? 10 : 20, {
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
      <Animated.View style={[styles.viewStartEndLine, reanimated1Style]} />
      <Animated.View style={[styles.viewCenterLine, reanimated2Style]} />
      <Animated.View style={[styles.viewStartEndLine, reanimated1Style]} />
    </View>
  );
}
