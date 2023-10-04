import { Colors, NavigationColors } from '@/theme/Colors';
import {
  Colors as CustomColors,
  NavigationColors as CustomNavigationColors,
} from '@/theme/themes/custom/Colors';
import {
  Colors as DarkColors,
  NavigationColors as DarkNavigationColors,
} from '@/theme/themes/default_dark/Colors';
import { StatusBarStyle, useColorScheme } from 'react-native';

export default function () {
  // Get the scheme device
  const colorScheme = useColorScheme();

  // Get current theme from the store
  const currentTheme: 'default' | 'custom' = 'custom';
  const darkMode = colorScheme === 'dark';
  const barStyle: null | StatusBarStyle | undefined = darkMode
    ? 'light-content'
    : 'dark-content';

  let colors = {
    ...Colors,
  };

  let navigationColors = {
    ...NavigationColors,
  };

  if (darkMode) {
    colors = { ...colors, ...DarkColors };
    navigationColors = { ...navigationColors, ...DarkNavigationColors };
  } else if (currentTheme === 'custom') {
    colors = { ...colors, ...CustomColors };
    navigationColors = { ...navigationColors, ...CustomNavigationColors };
  }

  return {
    colors,
    navigationColors,
    barStyle,
  };
}
