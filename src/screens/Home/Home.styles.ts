import { Layout } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      backgroundColor: colors.background,
    },
    viewStories: {},
    viewPosts: {},
  });

export default styles;
