import { useStyle } from '@/hooks';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  SharedValue,
  runOnJS,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import style from './InstagramStoryLoader.styles';

type InstagramStoryLoaderPropTypes = {
  width: any;
  linear: SharedValue<number>;
  duration?: number;
  isViewed: boolean;
  isCurrent: boolean;
  onStoryPress: any;
};

export function InstagramStoryLoader({
  width,
  linear,
  isViewed = true,
  isCurrent = false,
  onStoryPress,
}: InstagramStoryLoaderPropTypes): JSX.Element {
  const { styles } = useStyle(style);

  const animatedChanged = useAnimatedStyle(() => ({
    width: linear.value,
  }));

  useEffect(() => {
    if (isCurrent && !isViewed) {
      linear.value = withTiming(
        width,
        {
          duration: 5000,
          easing: Easing.linear,
        },
        (isFinished: boolean | undefined) => {
          if (isFinished) {
            runOnJS(onStoryPress)();
          }
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrent, isViewed, linear, width]);

  return (
    <View style={styles.container}>
      {isCurrent && !isViewed ? (
        <Animated.View style={[styles.loader, animatedChanged]} />
      ) : isViewed ? (
        <View style={styles.loader} />
      ) : (
        <View style={styles.loaderBar} />
      )}
    </View>
  );
}
