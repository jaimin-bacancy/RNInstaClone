import { Layout, Typography, WIDTH, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      // ...Layout.fill,
      backgroundColor: colors.background,
    },
    headerContainer: {
      padding: ms(10),
      marginHorizontal: hs(10),
    },
    firstHighlight: {
      ...Layout.center,
      width: ms(60),
      height: ms(60),
      borderRadius: ms(30),
      borderWidth: ms(1),
      opacity: 0.7,
      marginHorizontal: ms(5),
      borderColor: colors.black,
    },
    otherHighlight: {
      width: ms(60),
      height: ms(60),
      borderRadius: ms(30),
      backgroundColor: colors.textGray400,
      opacity: 0.1,
      marginHorizontal: hs(5),
    },
    imgAdd: {
      height: ms(30),
      width: ms(30),
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    textStatsCount: {
      ...Typography._20Medium,
      color: colors.black,
    },
    textStatsCountLabel: {
      ...Typography._14Regular,
      color: colors.black,
    },
    textUsername: {
      ...Typography._16Medium,
      color: colors.black,
      marginTop: vs(4),
    },
    textHeaderUserName: {
      ...Typography._20Bold,
      color: colors.black,
    },
    imgArrowDown: {
      height: ms(24),
      width: ms(24),
      resizeMode: 'contain',
      tintColor: colors.black,
    },
    imgArrowUp: {
      ...Layout.rotate180,
    },
    imgUpload: {
      height: ms(28),
      width: hs(28),
      resizeMode: 'contain',
      marginHorizontal: hs(8),
      tintColor: colors.black,
    },
    viewStatsContainer: {
      ...Layout.row,
      ...Layout.justifyContentBetween,
      marginVertical: vs(20),
    },
    imgUserImage: {
      width: ms(80),
      height: ms(80),
      borderRadius: ms(40),
      resizeMode: 'cover',
    },
    textStoryHighlights: {
      letterSpacing: ms(1),
      ...Typography._14SemiBold,
      color: colors.black,
    },
    viewCurrentUser: {
      ...Layout.fullWidth,
      ...Layout.rowHCenter,
      justifyContent: 'space-evenly',
      paddingVertical: vs(5),
    },
    btnEditProfile: {
      ...Layout.fullWidth,
      height: vs(35),
      borderRadius: ms(5),
      backgroundColor: colors.textGray400,
      ...Layout.colCenter,
    },
    textEditProfile: {
      ...Typography._16Medium,
      color: colors.black,
    },
    btnFollow: {
      ...Layout.fullWidth,
      height: vs(35),
      borderRadius: ms(5),
      borderColor: colors.black,
      ...Layout.colCenter,
      backgroundColor: undefined,
      borderWidth: 1,
    },
    btnFollowing: {
      backgroundColor: colors.primary,
      borderWidth: 0,
    },
    textFollowing: { ...Typography._14Medium, color: colors.primary },
    textFollow: { color: colors.black },
    btnMessage: {
      flex: 1,
      marginHorizontal: hs(5),
      height: vs(35),
      borderColor: colors.textGray400,
      ...Layout.colCenter,
      borderRadius: 5,
      backgroundColor: colors.textGray400,
    },
    btnFollowFollowing: {
      flex: 1,
    },
    viewStoryHighlights: {
      marginHorizontal: hs(10),
      padding: ms(10),
    },
    scrollHighlights: {
      paddingVertical: vs(5),
      marginTop: vs(4),
    },
    textKeepYourFavorite: {
      ...Typography._12Regular,
      color: colors.black,
    },
    viewStats: {
      position: 'absolute',
      ...Layout.rowHCenter,
      justifyContent: 'space-between',
      width: WIDTH - ms(150),
      right: 0,
    },
    textBio: {
      ...Typography._12Regular,
      color: colors.black,
    },
  });

export default styles;
