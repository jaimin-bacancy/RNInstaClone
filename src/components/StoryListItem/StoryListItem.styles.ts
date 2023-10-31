import { Layout, WIDTH, ms } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors => {
  return StyleSheet.create({
    container: {
      ...Layout.fill,
      paddingTop: ms(40),
      backgroundColor: colors.black,
    },
    itemContainer: {
      ...Layout.fill,
      width: WIDTH,
    },
    touchContainer: {
      ...Layout.fill,
    },
    list: {
      ...Layout.fill,
      backgroundColor: colors.black,
    },
    loaderStyle: {
      ...Layout.fill,
      alignSelf: 'center',
    },
  });
};

export default styles;
