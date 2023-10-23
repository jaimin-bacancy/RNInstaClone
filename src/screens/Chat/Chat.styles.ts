import { Layout, Typography, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      ...Layout.fill,
      backgroundColor: colors.background,
    },
    viewHeader: {
      ...Layout.rowHCenter,
      ...Layout.justifyContentBetween,
      paddingBottom: vs(8),
    },
    btnBack: { height: ms(30), width: ms(30), marginStart: ms(20) },
    imgBack: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    btnCalls: {
      height: ms(30),
      width: ms(30),
      marginEnd: ms(20),
    },
    btnNewChat: {
      height: ms(30),
      width: ms(30),
      marginEnd: ms(20),
    },
    viewCallsNewChat: {
      ...Layout.rowHCenter,
    },
    listNotes: {
      paddingHorizontal: hs(10),
      marginTop: vs(20),
      marginBottom: vs(10),
    },
    listMessages: {
      paddingHorizontal: hs(10),
      marginTop: vs(10),
      marginBottom: vs(10),
    },
    viewChatListHeader: {
      ...Layout.rowHCenter,
      ...Layout.justifyContentBetween,
      marginBottom: vs(10),
      paddingHorizontal: hs(10),
    },
    textMessages: {
      ...Typography._18Medium,
      color: colors.black,
    },
    textRequests: {
      ...Typography._18Medium,
      color: colors.primary,
    },
  });

export default styles;
