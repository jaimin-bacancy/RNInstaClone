import { Layout, Typography, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.rowHCenter,
      backgroundColor: colors.circleButtonBackground,
      borderRadius: ms(8),
      marginHorizontal: hs(18),
      marginVertical: vs(10),
      paddingHorizontal: hs(14),
      paddingVertical: vs(8),
    },
    imgSearch: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    viewSearchIcon: {
      height: ms(24),
      width: ms(24),
    },
    viewSearchInput: {
      flex: 1,
    },
    inputSearch: {
      ...Typography._14Regular,
      color: colors.black,
      padding: 0,
      marginStart: hs(8),
    },
  });

export default styles;
