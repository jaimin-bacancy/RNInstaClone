import { WIDTH, ms } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      width: WIDTH,
      height: ms(2),
      backgroundColor: colors.textGray400,
      borderRadius: ms(2),
    },
    loader: {
      height: '100%',
      backgroundColor: colors.textGray200,
      borderRadius: ms(2),
    },
  });

export default styles;
