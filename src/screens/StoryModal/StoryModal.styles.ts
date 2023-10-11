import { HEIGHT, Layout, WIDTH, hs, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      backgroundColor: colors.background,
      paddingTop: vs(20),
    },
    contentContainer: {
      ...Layout.fill,
    },
    storyContainer: {
      height: HEIGHT,
      width: WIDTH,
    },
    storyImage: { height: HEIGHT, width: WIDTH, resizeMode: 'contain' },
    viewLoaders: {
      ...Layout.row,
      ...Layout.justifyContentAround,
      marginHorizontal: hs(4),
    },
    loaderContainer: {
      width: '100%',
    },
  });

export default styles;
