import { Layout, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      ...Layout.row,
      ...Layout.scrollSpaceBetween,
      backgroundColor: colors.background,
      paddingHorizontal: hs(10),
    },
    imgFlare: {
      height: ms(30),
      width: ms(30),
      resizeMode: 'contain',
      tintColor: colors.white,
      marginHorizontal: hs(10),
    },
    viewSeekBar: {
      height: ms(40),
      width: ms(40),
      backgroundColor: colors.primary,
      borderRadius: ms(5),
    },
    viewSeekContainer: {
      // ...Layout.fill,
      // width: '100%',
      width: ms(50),
      height: ms(50),
      ...Layout.justifyContentCenter,
      backgroundColor: colors.primary,
      paddingVertical: vs(5),
      borderRadius: ms(4),
    },
  });

export default styles;
