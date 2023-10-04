import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// const screenWidth = window.width;
// const screenHeight = window.height;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// const width = screenWidth < screenHeight ? screenHeight : screenWidth;
// const height = screenHeight < screenWidth ? screenWidth : screenHeight;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const hs = (size: number) => (width / guidelineBaseWidth) * size;
const vs = (size: number) => (height / guidelineBaseHeight) * size;
const ms = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

const Spacing = {
  paddingVertical: vs(12),
  marginVertical: vs(12),
  paddingHorizontal: hs(16),
  marginHorizontal: hs(20),
  borderRadius: ms(4),
  borderWidth: ms(1),
  screenBottomPadding: vs(30),
};

export { Spacing, height, hs, ms, vs, width };
