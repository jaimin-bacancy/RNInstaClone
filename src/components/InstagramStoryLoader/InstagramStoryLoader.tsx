import { useStyle } from '@/hooks';
import { WIDTH } from '@/theme';
import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import style from './InstagramStoryLoader.styles';

export function InstagramStoryLoader(): JSX.Element {
  const { styles } = useStyle(style);

  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    const loadingAnimation = () => {
      Animated.timing(progress, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }).start(() => {
        progress.setValue(0);
        loadingAnimation();
      });
    };

    loadingAnimation();
  }, [progress]);

  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-WIDTH, 0],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.loader, { transform: [{ translateX }] }]} />
    </View>
  );
}
