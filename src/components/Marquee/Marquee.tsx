import { useStyle } from '@/hooks';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';
import style from './Marquee.styles';

export type MarqueeProps = React.PropsWithChildren<{
  speed?: number;
  spacing?: number;
  customStyle?: ViewStyle;
}>;

const AnimatedChild = ({
  index,
  children,
  anim,
  textWidth,
  spacing,
}: React.PropsWithChildren<{
  index: number;
  anim: SharedValue<number>;
  textWidth: SharedValue<number>;
  spacing: number;
}>) => {
  const styles = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: index * (textWidth.value + spacing),
      transform: [
        {
          translateX: -(anim.value % (textWidth.value + spacing)),
        },
      ],
    };
  }, [index, spacing, textWidth]);
  return <Animated.View style={styles}>{children}</Animated.View>;
};

export function Marquee({
  speed = 1,
  children,
  spacing = 0,
  customStyle,
}: MarqueeProps): JSX.Element {
  const { styles } = useStyle(style);

  const parentWidth = useSharedValue(0);
  const textWidth = useSharedValue(0);
  const [cloneTimes, setCloneTimes] = React.useState(0);
  const anim = useSharedValue(0);

  useFrameCallback(() => {
    anim.value += speed;
  }, true);

  useAnimatedReaction(
    () => {
      if (textWidth.value === 0 || parentWidth.value === 0) {
        return 0;
      }
      return Math.round(parentWidth.value / textWidth.value) + 1;
    },
    v => {
      if (v === 0) {
        return;
      }
      // This is going to cover the case when the text/element size
      // is greater than the actual parent size
      // Double this to cover the entire screen twice, in this way we can
      // reset the position of the first element when its going to move out
      // of the screen without any noticible glitch
      runOnJS(setCloneTimes)(v * 2);
    },
    [],
  );

  return (
    <Animated.View
      style={customStyle}
      onLayout={ev => {
        parentWidth.value = ev.nativeEvent.layout.width;
      }}
      pointerEvents="box-none">
      <Animated.View style={styles.row} pointerEvents="box-none">
        {
          // We are adding the text inside a ScrollView because in this way we
          // ensure that its not going to "wrap".
        }
        <Animated.ScrollView
          horizontal
          style={styles.hidden}
          pointerEvents="box-none">
          <View
            onLayout={ev => {
              textWidth.value = ev.nativeEvent.layout.width;
            }}>
            {children}
          </View>
        </Animated.ScrollView>
        {cloneTimes > 0 &&
          [...Array(cloneTimes).keys()].map(index => {
            return (
              <AnimatedChild
                key={`clone-${index}`}
                index={index}
                anim={anim}
                textWidth={textWidth}
                spacing={spacing}>
                {children}
              </AnimatedChild>
            );
          })}
      </Animated.View>
    </Animated.View>
  );
}
