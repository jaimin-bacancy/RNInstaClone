import useTheme from './useTheme';

type StylesReturnType = {
  styles: any;
};

export default function (style: Function): StylesReturnType {
  const { colors } = useTheme();

  const styles = style(colors);

  return {
    styles,
  };
}
