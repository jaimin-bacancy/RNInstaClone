import { HEIGHT, Layout, Typography, WIDTH, hs, ms, vs } from '@/theme';
import { Platform, StatusBar, StyleSheet } from 'react-native';

const androidExtraHeight = vs(50) + (StatusBar.currentHeight ?? 0);
const height = HEIGHT - (Platform.OS === 'ios' ? vs(140) : androidExtraHeight);

const styles = colors =>
  StyleSheet.create({
    container: {
      width: WIDTH,
      height: height,
      justifyContent: 'center',
    },
    textCount: {
      ...Typography._14Regular,
      color: colors.black,
    },
    btnAction: {
      height: ms(34),
      width: ms(34),
    },
    imgAction: {
      ...Layout.fullSize,
      resizeMode: 'contain',
    },
    viewAction: {
      ...Layout.colCenter,
      marginVertical: vs(8),
    },
    viewState: {
      position: 'absolute',
      right: hs(20),
      bottom: vs(0),
    },
    viewUserImage: {
      ...Layout.justifyContentCenter,
      ...Layout.alignItemsCenter,
      height: ms(40),
      width: ms(40),
      borderRadius: ms(20),
      marginEnd: hs(8),
      backgroundColor: colors.black,
    },
    imgUser: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    viewUserDetailHeader: {
      ...Layout.rowHCenter,
      ...Layout.justifyContentBetween,
      marginHorizontal: hs(8),
      paddingVertical: vs(10),
    },
    viewUserName: {
      ...Layout.fill,
    },
    textUserName: {
      ...Typography._16Medium,
      color: colors.black,
    },
    viewDetails: {
      maxHeight: HEIGHT / 2,
      marginStart: hs(20),
      position: 'absolute',
      bottom: vs(20),
      paddingEnd: hs(60),
    },
    captionContainer: {},
    viewCaption: {
      maxHeight: HEIGHT / 2.5,
      ...Typography._14Regular,
      color: colors.textGray400,
      marginTop: vs(14),
    },
    textMediaName: {
      width: '100%',
      ...Typography._12Medium,
      color: colors.black,
    },
    viewMedia: {
      ...Layout.rowHCenter,
      alignSelf: 'flex-start',
      paddingHorizontal: ms(8),
      paddingVertical: vs(2),
      backgroundColor: colors.circleButtonBackground,
      borderRadius: ms(20),
      marginTop: vs(10),
      marginEnd: hs(60),
    },
    viewArrow: {
      height: ms(18),
      width: ms(18),
      marginEnd: ms(4),
    },
    imgArrow: {
      ...Layout.fullSize,
      tintColor: colors.black,
      resizeMode: 'contain',
    },
    imgFavorite: {
      position: 'absolute',
      height: ms(100),
      width: ms(100),
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    imgActionColor: {
      tintColor: colors.black,
    },
    firstHalf: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: WIDTH * 0.25,
      height: height,
      zIndex: 99,
    },
    secondHalf: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: WIDTH * 0.25,
      height: height,
      zIndex: 99,
    },
  });

export default styles;
