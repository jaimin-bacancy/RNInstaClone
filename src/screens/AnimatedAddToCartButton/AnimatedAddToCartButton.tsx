import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import styles from './AnimatedAddToCartButton.styles';

export function AnimatedAddToCartButton(): JSX.Element {
  const buttonScale = useSharedValue(1);
  const rippleWidth = useSharedValue(0);

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  const animatedRippleStyle = useAnimatedStyle(() => {
    return {
      width: rippleWidth.value,
    };
  });

  const handlePress = () => {
    // Scale animation when button is pressed
    buttonScale.value = withSpring(0.9, {}, () => {
      buttonScale.value = withSpring(1);
    });

    // Ripple animation when button is pressed
    rippleWidth.value = withTiming(300, {
      duration: 1000,
      easing: Easing.out(Easing.ease),
    });

    // Reset button after 500ms
    setTimeout(() => {
      buttonScale.value = withSpring(1);
      rippleWidth.value = withTiming(0, {
        duration: 0,
      });
    }, 500);

    // Add your logic for adding to cart here
    // For simplicity, I'm just logging a message
    console.log('Item added to cart');
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.buttonContainer}>
          <Animated.View style={[styles.button, animatedButtonStyle]}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Animated.View>
          <Animated.View style={[styles.ripple, animatedRippleStyle]} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
