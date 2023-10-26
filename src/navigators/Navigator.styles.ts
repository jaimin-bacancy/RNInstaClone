import { Layout, hs, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    viewPost: {
      width: hs(124),
      height: vs(125),
      marginVertical: 0.5,
      backgroundColor: colors.textGray400,
    },
    viewVideo: {
      width: hs(124),
      height: vs(200),
      marginVertical: 0.5,
      backgroundColor: colors.textGray400,
    },
    postsContainer: {
      ...Layout.fullSize,
      ...Layout.fill,
      ...Layout.row,
      ...Layout.justifyContentBetween,
      backgroundColor: colors.background,
      flexWrap: 'wrap',
    },
    scrollPost: {
      ...Layout.fullSize,
      backgroundColor: colors.background,
    },
    tabContainer: {
      minHeight: 9999,
    },
  });

export default styles;
