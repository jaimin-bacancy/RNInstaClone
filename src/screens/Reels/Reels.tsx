import { useStyle } from '@/hooks';
import React from 'react';
import { View } from 'react-native';
import style from './Reels.styles';

export function Reels(): JSX.Element {
  const { styles } = useStyle(style);

  return <View style={styles.container} />;
}
