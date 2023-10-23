import { HEIGHT, Layout, Typography, WIDTH, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      // borderBottomWidth: StyleSheet.hairlineWidth,
      // borderTopWidth: StyleSheet.hairlineWidth,
      paddingVertical: vs(4),
      borderColor: colors.textGray200,
    },
    viewPostImage: {
      height: HEIGHT / 3,
      width: WIDTH,
      overflow: 'hidden',
      backgroundColor: colors.circleButtonBackground,
    },
    imgPost: {
      height: HEIGHT / 3,
      width: WIDTH,
      resizeMode: 'contain',
      ...Layout.justifyContentCenter,
      ...Layout.alignItemsCenter,
    },
    viewActionButton: {
      height: ms(30),
      width: ms(30),
      marginHorizontal: hs(8),
      ...Layout.justifyContentCenter,
      ...Layout.alignItemsCenter,
    },
    imgActionButton: {
      height: '90%',
      width: '90%',
      resizeMode: 'contain',
    },
    imgActionColor: {
      tintColor: colors.black,
    },
    viewActionButtons: {
      ...Layout.row,
      ...Layout.justifyContentBetween,
      paddingVertical: vs(4),
    },
    imgFavorite: {
      height: ms(100),
      width: ms(100),
      resizeMode: 'contain',
    },
    normalDot: {
      height: ms(6),
      width: ms(6),
      borderRadius: ms(3),
      marginHorizontal: ms(2),
    },
    indicatorContainer: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      ...Layout.rowCenter,
    },
    indicatorInnerContainer: {
      width: ms(50),
      overflow: 'hidden',
      ...Layout.rowCenter,
    },
    viewUserImage: {
      ...Layout.justifyContentCenter,
      ...Layout.alignItemsCenter,
      height: ms(34),
      width: ms(34),
      borderRadius: ms(17),
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
    btnOptions: {
      height: ms(24),
      width: ms(24),
    },
    imgOption: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    textUserName: {
      ...Typography._14Medium,
      color: colors.black,
    },
  });

export default styles;
