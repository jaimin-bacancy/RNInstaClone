import { WIDTH, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      flex: 1,
      alignSelf: 'center',
    },
    divStory: {
      alignSelf: 'center',
      height: '100%',
      width: WIDTH,
      paddingBottom: ms(4),
    },
    imgStyle: {
      width: WIDTH,
      height: '100%',
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    imageOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      resizeMode: 'contain',
    },
    progressiveImageContainer: {
      backgroundColor: 'transparent',
    },
    parentView: {
      flex: 1,
    },
    customView: {
      position: 'absolute',
      flexDirection: 'column',
      width: WIDTH,
      zIndex: 999,
    },
    topView: {
      position: 'absolute',
      flexDirection: 'column',
      width: WIDTH,
      zIndex: 99,
    },
    bottomView: {
      justifyContent: 'flex-end',
    },
    mainView: {
      position: 'absolute',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
    progressView: {
      flex: 1,
      width: '100%',
      position: 'absolute',
      flexDirection: 'row',
    },
    contentVideoView: {
      flex: 1,
      borderRadius: 4,
      overflow: 'hidden',
      backgroundColor: 'transparent',
    },
    progressBarArray: {
      flexDirection: 'row',
      position: 'absolute',
      top: vs(10),
      width: '98%',
      height: vs(10),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    progressBarContainer: {
      flex: 1,
      margin: ms(2),
      borderRadius: vs(10),
    },
    currentBarContainer: {
      position: 'absolute',
      top: 0,
      margin: 0,
    },
    //ProfileHeader
    userContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    barUsername: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: ms(50),
      height: ms(50),
      borderRadius: ms(50),
      marginLeft: ms(8),
    },
    verifyIcon: {
      width: ms(20),
      height: ms(20),
      marginLeft: ms(5),
    },
    closeIcon: {
      width: ms(14),
      height: ms(14),
      marginRight: ms(8),
      tintColor: colors.black,
    },
    userView: {
      flexDirection: 'row',
      position: 'absolute',
      top: vs(30),
      width: '98%',
      alignItems: 'center',
    },
    name: {
      fontSize: ms(18),
      fontWeight: '500',
      marginLeft: ms(12),
      color: 'white',
    },
    message: {
      fontSize: ms(12),
      fontWeight: '400',
      marginTop: vs(3),
      marginLeft: ms(12),
      color: 'white',
    },
    loader: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    loaderView: {
      flex: 1,
      position: 'absolute',
      top: '50%',
      left: '45%',
    },
    loaderStyle: {
      flex: 1,
      alignSelf: 'center',
    },
  });
};

export default styles;
