import { useStyle } from '@/hooks';
import React from 'react';
import { Text, View } from 'react-native';
import style from './Home.styles';

export function Home(): JSX.Element {
  const { styles } = useStyle(style);

  return (
    <View style={styles.container}>
      <Text>HOMEE</Text>
    </View>
  );
}
