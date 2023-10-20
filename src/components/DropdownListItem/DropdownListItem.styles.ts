import { StyleSheet } from 'react-native';

const styles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    headerLabel: {
      color: colors.white,
      fontSize: 20,
      letterSpacing: 1.2,
      textAlign: 'center',
    },
    label: {
      color: colors.white,
      fontSize: 14,
      letterSpacing: 1.2,
      marginHorizontal: 20,
    },
  });

export default styles;
