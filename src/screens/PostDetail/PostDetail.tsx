import { useStyle } from '@/hooks';
import React from 'react';
import { View } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import style from './PostDetail.styles';

export function PostDetail(): JSX.Element {
  const { styles } = useStyle(style);

  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionTag="image"
        source={{ uri: 'https://loremflickr.com/640/360' }}
        style={styles.viewImage}
      />
      <Animated.Text
        entering={FadeInLeft.duration(500).delay(800)}
        style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>
        {'Hola'}
      </Animated.Text>
    </View>
  );
}
