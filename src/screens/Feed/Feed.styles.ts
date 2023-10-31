import { Layout, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      backgroundColor: colors.background,
    },
    viewStories: {},
    viewPosts: {},
    storyWrapper: {
      flex: 1,
      marginTop: vs(40),
      marginHorizontal: ms(10),
    },
    albumText: {
      fontSize: ms(30),
      marginHorizontal: ms(10),
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: vs(20),
    },
    separator: {
      marginHorizontal: ms(6),
    },
  });

export default styles;
