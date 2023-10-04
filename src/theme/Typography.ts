import { StyleSheet } from 'react-native';
import { ms } from './Spacing';

export const FontSize = {
  extraSmall: ms(8),
  small: ms(10),
  caption: ms(12),
  label: ms(14),
  body: ms(16),
  title: ms(18),
  headline: ms(20),
};

export const Fonts = {
  rubikRegular: 'Rubik-Regular',
  rubikMedium: 'Rubik-Medium',
  rubikSemiBold: 'Rubik-SemiBold',
  rubikBold: 'Rubik-Bold',
};

export const Typography = StyleSheet.create({
  // Headline
  _20Regular: {
    fontSize: FontSize.headline,
    fontFamily: Fonts.rubikRegular,
  },
  _20Medium: {
    fontSize: FontSize.headline,
    fontFamily: Fonts.rubikMedium,
  },
  _20Bold: {
    fontSize: FontSize.headline,
    fontFamily: Fonts.rubikBold,
  },
  // Title
  _18Regular: {
    fontSize: FontSize.title,
    fontFamily: Fonts.rubikRegular,
  },
  _18Medium: {
    fontSize: FontSize.title,
    fontFamily: Fonts.rubikMedium,
  },
  _18SemiBold: {
    fontSize: FontSize.title,
    fontFamily: Fonts.rubikSemiBold,
  },
  _18Bold: {
    fontSize: FontSize.title,
    fontFamily: Fonts.rubikBold,
  },
  // Body
  _16Regular: {
    fontSize: FontSize.body,
    fontFamily: Fonts.rubikRegular,
  },
  _16Medium: {
    fontSize: FontSize.body,
    fontFamily: Fonts.rubikMedium,
  },
  _16SemiBold: {
    fontSize: FontSize.body,
    fontFamily: Fonts.rubikSemiBold,
  },
  _16Bold: {
    fontSize: FontSize.body,
    fontFamily: Fonts.rubikBold,
  },
  // Label
  _14Regular: {
    fontSize: FontSize.label,
    fontFamily: Fonts.rubikRegular,
  },
  _14Medium: {
    fontSize: FontSize.label,
    fontFamily: Fonts.rubikMedium,
  },
  _14SemiBold: {
    fontSize: FontSize.label,
    fontFamily: Fonts.rubikSemiBold,
  },
  // Caption
  _12Regular: {
    fontSize: FontSize.caption,
    fontFamily: Fonts.rubikRegular,
  },
  _12Medium: {
    fontSize: FontSize.caption,
    fontFamily: Fonts.rubikMedium,
  },
  _12SemiBold: {
    fontSize: FontSize.caption,
    fontFamily: Fonts.rubikSemiBold,
  },
  // Small
  _10Regular: {
    fontSize: FontSize.small,
    fontFamily: Fonts.rubikRegular,
  },
  // Small
  _8Regular: {
    fontSize: FontSize.extraSmall,
    fontFamily: Fonts.rubikRegular,
  },
});
