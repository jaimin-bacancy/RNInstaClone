import { Layout } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      ...Layout.colCenter,
      backgroundColor: colors.background,
    },
  });

export default styles;
