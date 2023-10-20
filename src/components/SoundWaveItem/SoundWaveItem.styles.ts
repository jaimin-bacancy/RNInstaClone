import { Layout, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors => {
  return StyleSheet.create({
    viewStartEndLine: {
      width: hs(4),
      height: vs(10),
      borderRadius: ms(10),
      marginHorizontal: hs(2),
      backgroundColor: colors.primary,
    },
    viewCenterLine: {
      width: hs(4),
      height: vs(20),
      borderRadius: ms(10),
      marginHorizontal: hs(2),
      backgroundColor: colors.primary,
    },
    viewMusicController: {
      ...Layout.rowCenter,
    },
  });
};

export default styles;
