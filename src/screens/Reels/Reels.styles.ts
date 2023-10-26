import { Layout, Typography, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      backgroundColor: colors.background,
    },
    viewHeader: {
      ...Layout.row,
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentBetween,
      paddingHorizontal: hs(20),
      height: vs(45),
      width: '100%',
      position: 'absolute',
    },
    btnLeftArrow: {
      height: ms(30),
      width: ms(30),
    },
    imgLeftArrow: {
      ...Layout.fullSize,
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    viewCamera: {
      height: ms(30),
      width: ms(30),
    },
    imgCamera: {
      ...Layout.fullSize,
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    textReels: {
      marginStart: hs(20),
      ...Typography._20Medium,
      color: colors.black,
    },
  });

export default styles;
