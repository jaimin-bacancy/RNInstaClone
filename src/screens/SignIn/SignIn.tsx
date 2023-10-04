import { useStyle } from '@/hooks';
import { strings } from '@/translations';
import React from 'react';
import { Text, View } from 'react-native';
import style from './SignIn.styles';

export function SignIn(): JSX.Element {
  const { styles } = useStyle(style);

  return (
    <View style={styles.container}>
      <Text style={styles.textHelloUser}>
        {strings.formatString(strings.helloUser, 'RNTS-Boilerplate')}
      </Text>
    </View>
  );
}
