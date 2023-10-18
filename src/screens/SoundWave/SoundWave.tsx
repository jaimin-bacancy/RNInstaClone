import { SoundWaveItem } from '@/components';
import { useStyle } from '@/hooks';
import React from 'react';
import { View } from 'react-native';
import style from './SoundWave.styles';

export function SoundWave(): JSX.Element {
  const { styles } = useStyle(style);

  return (
    <View style={[styles.container]}>
      <SoundWaveItem />
    </View>
  );
}
