import { Layout, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      ...Layout.colCenter,
      backgroundColor: colors.background,
    },
    viewImages: {
      flexWrap: 'wrap',
      ...Layout.row,
      ...Layout.justifyContentBetween,
      ...Layout.fullWidth,
    },
    viewSmallImage: { paddingBottom: vs(2), width: '33%' },
    imgSmall: { width: '100%', aspectRatio: 1, height: undefined },
    viewLarge: {
      ...Layout.row,
      ...Layout.justifyContentBetween,
      flexWrap: 'wrap',
      width: '66.5%',
    },
    itemLarge: { paddingBottom: 2, width: '49.5%' },
    viewLongImage: {
      ...Layout.row,
      ...Layout.justifyContentBetween,
      flexWrap: 'wrap',
      width: '33%',
    },
    itemLong: { paddingBottom: 2, width: '100%' },
    imgLong: { width: '100%', height: undefined, aspectRatio: 0.5 },
    viewLong: { marginLeft: 2, width: '33%' },
    viewSquare: { width: '66.5%' },
    imgLargeSquare: {
      height: undefined,
      width: '100%',
      aspectRatio: 1,
    },
  });

export default styles;
