import { Layout, hs, ms } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors => {
  return StyleSheet.create({
    viewStartEndLine: {
      width: 4,
      height: 10,
      borderRadius: ms(10),
      marginHorizontal: hs(1),
      backgroundColor: colors.primary,
    },
    viewCenterLine: {
      width: 4,
      height: 20,
      borderRadius: ms(10),
      marginHorizontal: hs(1),
      backgroundColor: colors.primary,
    },
    viewMusicController: {
      ...Layout.rowCenter,
    },
  });
};

export default styles;
