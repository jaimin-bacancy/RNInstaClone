import { Layout, Typography, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.rowHCenter,
      marginHorizontal: hs(10),
      marginVertical: hs(10),
    },
    textUserName: {
      ...Typography._16Medium,
      color: colors.black,
    },
    viewUserImage: {
      height: ms(60),
      width: ms(60),
      borderRadius: ms(30),
      marginEnd: hs(20),
      overflow: 'hidden',
      backgroundColor: colors.black,
    },
    viewGroupTopImage: {
      height: ms(50),
      width: ms(50),
      borderRadius: ms(25),
      overflow: 'hidden',
      backgroundColor: colors.black,
      borderWidth: ms(2),
    },
    viewGroupImage: {
      position: 'absolute',
      top: ms(10),
      left: ms(15),
    },
    imgUser: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    viewLastMessage: {
      ...Layout.row,
      ...Layout.alignItemsEnd,
    },
    textLastMessage: {
      ...Layout.fill,
      ...Typography._16Medium,
      color: colors.black,
      marginTop: vs(2),
    },
    textSeenLastMessage: {
      color: colors.textGray400,
    },
    textSeenUserName: {
      color: colors.textGray400,
    },
    textTime: {
      ...Typography._16Medium,
      color: colors.textGray400,
      marginStart: hs(4),
      textAlign: 'left',
    },
    viewUnSeenContainer: {
      ...Layout.center,
      width: hs(40),
      height: vs(12),
    },
    viewUnSeen: {
      height: ms(10),
      width: ms(10),
      borderRadius: ms(5),
      backgroundColor: colors.primary,
    },
    viewUsernameLastMessage: {
      ...Layout.rowHCenter,
      ...Layout.fill,
    },
    btnCamera: {
      height: ms(28),
      width: ms(28),
    },
    imgCamera: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    viewCameraAndDot: {
      ...Layout.rowHCenter,
    },
    sentTimeStyle: {
      marginStart: hs(0),
    },
    viewUserName: {},
    containerGroupImage: { height: ms(60), width: ms(60), marginEnd: hs(20) },
  });

export default styles;
