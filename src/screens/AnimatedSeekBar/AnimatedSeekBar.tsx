import { Icons } from '@/assets';
import { useStyle } from '@/hooks';
import { ms } from '@/theme';
import React, { useRef } from 'react';
import { PanResponder, Animated as RNAnimated, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import style from './AnimatedSeekBar.styles';

export function AnimatedSeekBar(): JSX.Element {
  const { styles } = useStyle(style);

  const sv = useSharedValue(0);
  const width = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${sv.value * 360}deg` }],
    };
  }, []);

  const pan = useRef(new RNAnimated.ValueXY({ x: 0, y: 0 })).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: e => {
        width.value =
          e.nativeEvent.locationX <= 0 ? 0 : e.nativeEvent.locationX - ms(120);
        sv.value =
          e.nativeEvent.locationX <= 0
            ? 0
            : (e.nativeEvent.locationX - ms(120)) / 360;

        RNAnimated.event([null, { dx: pan.x }], {
          useNativeDriver: true,
        });
      },
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  const outerStyle = useAnimatedStyle(() => {
    return {
      width: width.value + 50,
    };
  }, []);

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[styles.viewSeekContainer, outerStyle]}
        {...panResponder.panHandlers}>
        <Animated.Image
          source={Icons.flare}
          style={[styles.imgFlare, rStyle]}
        />
      </Animated.View>
      {/* <TouchableOpacity
        onPress={() => {
          setRotating(!rotating);
          sv.value = withTiming(
            1,
            {
              duration: duration,
              easing: Easing.linear,
            },
            isFinished => {
              if (isFinished) {
                width.value = withTiming(WIDTH / 2);
                sv.value = 0;
              }
            },
          );
        }}>
        <Text>{rotating ? 'Cancel' : 'Rotate'}</Text>
      </TouchableOpacity> */}
    </View>
  );
}
