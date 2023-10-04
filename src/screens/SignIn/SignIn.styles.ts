import { Layout, Typography } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      backgroundColor: colors.background,
    },
    textHelloUser: {
      ...Typography._12SemiBold,
      color: colors.textGray800,
    },
  });

export default styles;
