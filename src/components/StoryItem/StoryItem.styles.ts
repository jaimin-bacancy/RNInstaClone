import { Layout, Typography, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentCenter,
      marginHorizontal: hs(4),
      marginTop: vs(12),
      marginBottom: vs(8),
    },
    imgUser: {
      height: ms(58),
      width: ms(58),
      borderRadius: ms(29),
      resizeMode: 'contain',
    },
    viewImageUserBorder: {
      borderWidth: ms(2),
      height: ms(66),
      width: ms(66),
      borderRadius: ms(33),
      overflow: 'hidden',
      ...Layout.justifyContentCenter,
      ...Layout.alignItemsCenter,
      backgroundColor: colors.white,
    },
    textUserName: {
      ...Typography._12Regular,
      marginTop: vs(2),
      color: colors.black,
    },
    viewedStoryBorder: {
      borderWidth: ms(1),
      borderColor: colors.textGray200,
    },
    viewAdd: {
      height: ms(20),
      width: ms(20),
      position: 'absolute',
      bottom: vs(14),
      right: vs(2),
      backgroundColor: colors.white,
      borderRadius: ms(10),
    },
    imgAdd: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      tintColor: colors.circleButtonColor,
    },
    linearGradient: {
      height: ms(66),
      width: ms(66),
      borderRadius: ms(33),
    },
    innerContainer: {
      ...Layout.fill,
      ...Layout.justifyContentCenter,
      ...Layout.alignItemsCenter,
      borderRadius: ms(33),
      margin: ms(2),
      backgroundColor: colors.white,
    },
  });

export default styles;
