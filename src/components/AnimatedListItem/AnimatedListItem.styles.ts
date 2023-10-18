import { ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      height: vs(50),
      width: '90%',
      backgroundColor: colors.primary,
      alignSelf: 'center',
      borderRadius: ms(8),
      marginTop: vs(20),
    },
  });

export default styles;
