import { Layout, Typography, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      ...Layout.colCenter,
      backgroundColor: colors.primary,
      margin: ms(5),
      paddingVertical: vs(20),
      borderRadius: ms(4),
    },
    textName: {
      ...Typography._14SemiBold,
      color: colors.white,
    },
  });

export default styles;
