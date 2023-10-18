import { HEIGHT, Layout, WIDTH } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      ...Layout.colCenter,
      backgroundColor: colors.background,
    },
    viewImage: {
      width: WIDTH,
      height: HEIGHT / 4,
      resizeMode: 'cover',
    },
    textDummy: { color: colors.black, fontSize: 20, fontWeight: 'bold' },
  });

export default styles;
