import { StyleSheet } from 'react-native';

const styles = () =>
  StyleSheet.create({
    hidden: { opacity: 0, zIndex: -9999 },
    row: { flexDirection: 'row', overflow: 'hidden' },
  });

export default styles;
