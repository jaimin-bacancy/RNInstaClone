import { HEIGHT, Layout, Typography, WIDTH, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fullSize,
      position: 'absolute',
      zIndex: 1,
      backgroundColor: colors.white05,
    },
    imgAction: {
      height: ms(24),
      width: ms(24),
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    viewHeader: {
      position: 'absolute',
      top: HEIGHT / 6,
      left: WIDTH / 18,
      backgroundColor: colors.background,
      width: '90%',
      height: '50%',
      zIndex: 1,
      elevation: 50,
      borderRadius: ms(8),
    },
    viewUsernameImage: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: vs(6),
      paddingHorizontal: hs(15),
    },
    imgUser: {
      width: ms(40),
      height: ms(40),
      borderRadius: ms(20),
    },
    textUsername: {
      ...Typography._14Medium,
      color: colors.black,
      marginStart: hs(8),
    },
    viewBottomActions: {
      position: 'absolute',
      bottom: 0,
      ...Layout.fullWidth,
      ...Layout.rowHCenter,
      justifyContent: 'space-around',
      backgroundColor: colors.background,
      borderBottomLeftRadius: ms(8),
      borderBottomRightRadius: ms(8),
      paddingVertical: vs(10),
    },
    imgPreview: {
      width: '100%',
      height: '100%',
      borderBottomLeftRadius: ms(8),
      borderBottomRightRadius: ms(8),
    },
  });

export default styles;
