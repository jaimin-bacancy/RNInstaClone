import { Layout } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...Layout.fill,
    ...Layout.colCenter,
  },
  buttonContainer: {
    overflow: 'hidden',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ripple: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: '100%',
    top: 0,
    left: 0,
  },
});

export default styles;
