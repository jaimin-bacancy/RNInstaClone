import { useStyle } from '@/hooks';
import React from 'react';
import { View } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import style from './SharedTransition.styles';

export function SharedTransition(): JSX.Element {
  const { styles } = useStyle(style);

  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionTag="sharedTransition"
        source={{ uri: 'https://loremflickr.com/640/360' }}
        style={styles.viewImage}
      />
      <Animated.Text
        entering={FadeInLeft.duration(500).delay(400)}
        style={styles.textDummy}>
        {'Hola'}
      </Animated.Text>
    </View>
  );
}
