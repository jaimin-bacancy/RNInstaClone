import { Layout, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.row,
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentBetween,
      paddingHorizontal: hs(10),
      paddingTop: vs(10),
    },
    logoView: {
      height: ms(40),
      width: hs(120),
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    imgRight: {
      height: ms(28),
      width: hs(28),
      resizeMode: 'contain',
      marginHorizontal: hs(8),
      tintColor: colors.black,
    },
  });

export default styles;
