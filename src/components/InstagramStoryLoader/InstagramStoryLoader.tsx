import { useStyle } from '@/hooks';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  SharedValue,
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
};

export function InstagramStoryLoader({
  width,
  linear,
  isViewed = true,
  isCurrent = false,
}: InstagramStoryLoaderPropTypes): JSX.Element {
  const { styles } = useStyle(style);

  // const [progress] = useState(new Animated.Value(0));

  const animatedChanged = useAnimatedStyle(() => ({
    width: linear.value,
  }));

  useEffect(() => {
    if (!isViewed) {
      linear.value = withTiming(
        width,
        {
          duration: 5000,
          easing: Easing.linear,
        },
        isFinished => {
          console.log('isFinished', isFinished);
        },
      );
    }
  }, [isViewed, linear, width]);

  // useEffect(() => {
  //   const loadingAnimation = () => {
  //     Animated.timing(progress, {
  //       toValue: 1,
  //       duration: 10000,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       progress.setValue(0);
  //       loadingAnimation();
  //     });
  //   };

  //   loadingAnimation();
  // }, [progress]);

  // const translateX = progress.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [-WIDTH, 0],
  // });

  return (
    <View style={[styles.container, { width: '100%' }]}>
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
