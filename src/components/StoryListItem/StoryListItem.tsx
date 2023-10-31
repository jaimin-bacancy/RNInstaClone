/* eslint-disable @typescript-eslint/no-unused-vars */
import { useStyle } from '@/hooks';
import { WIDTH } from '@/theme';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { StoryContainer } from '../StoryContainer/StoryContainer';
import {
  ListItemRef,
  ScrollValue,
  StoryListItemProps,
} from '../StoryModal/types';
import style from './StoryListItem.styles';

const cubeTransition = (index: number, scrollX: ScrollValue) => {
  'worklet';
  const width = WIDTH;
  const perspective = width;
  const angle = Math.atan(perspective / (width / 2));

  const offset = index * width;
  const inputRange = [width * (index - 1), width * index, width * (index + 1)];

  const translateX = interpolate(
    scrollX.value,
    inputRange,
    [0, 0, 0, 0],
    Extrapolate.CLAMP,
  );

  const scale = interpolate(scrollX.value, inputRange, [0.79, 1, 0.78]);

  const rotateY = interpolate(
    scrollX.value,
    [offset - width, offset + width],
    [angle, -angle],
    Extrapolate.CLAMP,
  );

  return {
    ...StyleSheet.absoluteFillObject,
    transform: [
      { perspective },
      { translateX },
      { rotateY: `${rotateY}rad` },
      { scale },
    ],
  };
};

type StoryRef = {
  pause: (pause: boolean) => void;
  handleLongPress: (visibility: boolean) => void;
  viewedStories: boolean[];
};

export const StoryListItem = forwardRef<ListItemRef, StoryListItemProps>(
  (
    {
      item,
      index,
      scrollX,
      nextStory,
      previousStory,
      storyIndex,
      onComplete,
      viewedStories,
      isTransitionActive,
      ...props
    }: StoryListItemProps,
    ref,
  ) => {
    const { styles } = useStyle(style);
    const storyRef = useRef<StoryRef>(null);
    const storyInitialIndex: number = viewedStories?.[index]?.findIndex(
      (val: boolean) => !val,
    );

    useImperativeHandle(ref, () => ({
      onScrollBegin: () => storyRef?.current?.pause(true),
      onScrollEnd: () => storyRef?.current?.pause(false),
      handleLongPress: (visibility: boolean) =>
        storyRef?.current?.handleLongPress(visibility),
    }));

    const animationStyle = useAnimatedStyle(() => {
      return cubeTransition(index, scrollX);
    }, [index, scrollX.value]);

    return (
      <Animated.View key={item.id} style={styles.itemContainer}>
        <Animated.View style={animationStyle}>
          <StoryContainer
            visible={true}
            key={index + item?.id}
            ref={storyRef}
            userStories={item}
            nextStory={nextStory}
            previousStory={previousStory}
            stories={item.stories}
            progressIndex={storyInitialIndex < 0 ? 0 : storyInitialIndex}
            maxVideoDuration={15}
            {...props}
            index={index}
            userStoryIndex={storyIndex}
          />
        </Animated.View>
      </Animated.View>
    );
  },
);
