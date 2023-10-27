import { ThemeNavigationColors } from '@/theme/types/theme';

export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  background: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  //Typography
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  white05: 'rgba(255,255,255,0.5)',
};

/* The code is defining a constant variable named `NavigationColors` which is of type
`Partial<ThemeNavigationColors>`. */
export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#FFFFFF',
  card: '#FFFFFF',
};

export default {
  Colors,
  NavigationColors,
};
