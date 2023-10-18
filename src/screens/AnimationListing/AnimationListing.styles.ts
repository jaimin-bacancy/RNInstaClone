import { Layout, ms } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      backgroundColor: colors.background,
    },
    listView: {
      marginHorizontal: ms(4),
    },
    itemView: {
      flex: 0.5,
    },
  });

export default styles;
