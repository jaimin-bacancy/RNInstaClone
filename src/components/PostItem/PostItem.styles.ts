import { HEIGHT, Layout, WIDTH, hs, ms, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopWidth: StyleSheet.hairlineWidth,
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
  });

export default styles;
