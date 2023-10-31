import { useTheme } from '@/hooks';
import { HEIGHT, Layout } from '@/theme';
import { StyleSheet, useWindowDimensions } from 'react-native';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface DraggableGestureProps {
  backgroundColor?: string;
  onComplete?: () => void;
  onScrollBeginDrag: () => void;
  onScrollEndDrag: () => void;
  handleLongPress: (visibility: boolean) => void;
  isKeyboardVisible: boolean;
}

const useDraggableGesture = ({
  backgroundColor,
  onComplete,
  onScrollBeginDrag,
  onScrollEndDrag,
  handleLongPress,
  isKeyboardVisible,
}: DraggableGestureProps) => {
  const { height, width } = useWindowDimensions();
  const { colors } = useTheme();
  const snapPoint: number = HEIGHT / 2;
  const scrollDragPoint: number = HEIGHT / 6;
  const translateX = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const scale = useSharedValue<number>(1);
  const isCompleted = useSharedValue<boolean>(false);
  const isDragged = useSharedValue<boolean | undefined>(undefined);
  const isLongPressed = useSharedValue<boolean | undefined>(undefined);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      isLongPressed.value = true;
      if (event.velocityY === 0) {
        return;
      }
      translateX.value = 0;
      translateY.value = event.translationY;
      if (event.translationY > scrollDragPoint) {
        isDragged.value = true;
      }
      if (event.translationY > snapPoint) {
        scale.value = snapPoint / event.translationY;
      }
    },
    onCancel: () => {
      isLongPressed.value = false;
      isDragged.value = false;
    },
    onEnd: event => {
      isLongPressed.value = false;
      isDragged.value = false;
      if (event.translationY < snapPoint) {
        translateX.value = 0;
        translateY.value = 0;
        return;
      }
      scale.value = withTiming(
        0,
        {
          duration: 300,
        },
        () => {
          isCompleted.value = true;
        },
      );
    },
  });

  useAnimatedReaction(
    () => isCompleted.value,
    (value: boolean) => {
      if (value) {
        onComplete && runOnJS(onComplete)();
      }
    },
  );

  const handleScroll = () => {
    if (isDragged.value === undefined) {
      return;
    }
    isDragged.value ? onScrollBeginDrag?.() : onScrollEndDrag?.();
  };

  useAnimatedReaction(
    () => isDragged.value,
    () => {
      if (isKeyboardVisible) {
        return;
      }
      runOnJS(handleScroll)();
    },
  );

  const handleVisibility = () => {
    if (isLongPressed.value === undefined) {
      return;
    }
    handleLongPress?.(isLongPressed.value);
  };

  useAnimatedReaction(
    () => isLongPressed.value,
    () => {
      if (isKeyboardVisible) {
        return;
      }
      runOnJS(handleVisibility)();
    },
  );

  const listAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
    backgroundColor: !isDragged.value
      ? backgroundColor ?? colors.background
      : colors.transparent,
  }));

  const listStyle = StyleSheet.flatten([Layout.fill, listAnimatedStyle]);
  const rootStyle = { height, width, backgroundColor: colors.transparent };

  return {
    listStyle,
    rootStyle,
    gestureHandler,
  };
};

export default useDraggableGesture;
