import { Layout, Typography, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.center,
      marginHorizontal: hs(10),
      marginTop: vs(20),
    },
    textUserName: {
      ...Typography._14Medium,
      color: colors.black,
      marginTop: vs(6),
    },
    textYourNote: {
      ...Typography._14Regular,
      color: colors.textGray400,
    },
    viewUserImage: {
      height: ms(80),
      width: ms(80),
      borderRadius: ms(40),
      overflow: 'hidden',
      backgroundColor: colors.black,
    },
    imgUser: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    mediaContainer: {
      position: 'absolute',
      top: -vs(10),
      left: 0,
      width: ms(80),
      backgroundColor: colors.circleButtonBackground,
      borderRadius: ms(10),
      paddingVertical: vs(4),
      paddingHorizontal: hs(4),
      height: ms(38),
    },
    viewTitle: {
      ...Layout.rowHCenter,
    },
    textMediaTitle: {
      ...Typography._12Medium,
      color: colors.black,
      flex: 1,
      marginStart: hs(2),
    },
    textMediaArtist: {
      ...Typography._12Regular,
      color: colors.textGray400,
      flex: 1,
    },
    viewNote: {},
    textNote: {
      ...Typography._12Regular,
      color: colors.black,
      textAlign: 'center',
      height: ms(38),
      marginHorizontal: hs(2),
    },
    btnAddNote: {
      position: 'absolute',
      height: ms(36),
      width: ms(36),
      top: -vs(14),
      left: 0,
      backgroundColor: colors.circleButtonBackground,
      overflow: 'hidden',
      borderRadius: ms(15),
    },
    imgAddNote: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      tintColor: colors.textGray200,
    },
  });

export default styles;
