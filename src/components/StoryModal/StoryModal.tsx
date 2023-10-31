import { WIDTH } from '@/theme';
import React, { useEffect, useRef, useState } from 'react';
import { Modal, Platform, View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { StoryListItem } from '../StoryListItem/StoryListItem';
import useStoryModal, { StoryModalProps } from './hooks/useStoryModal';
import { ListItemRef } from './types';

export function StoryModal({
  stories,
  visible,
  onComplete,
  onUserStoryIndexChange,
  viewedStories = [],
  userStoryIndex,
  backgroundColor,
}: StoryModalProps): JSX.Element {
  const flatListRef = useRef<any>(null);
  const itemsRef = useRef<ListItemRef[]>([]);
  const [isTransitionActive, setIsTransitionActive] = useState<boolean>(false);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, stories.length);
  }, [itemsRef, stories]);

  const onScrollBeginDrag = () => itemsRef.current[storyIndex]?.onScrollBegin();
  const onScrollEndDrag = () => itemsRef.current[storyIndex]?.onScrollEnd();
  const handleLongPress = (visibility: boolean) => {
    itemsRef.current[storyIndex]?.handleLongPress(visibility);
  };

  const {
    storyIndex,
    onViewRef,
    viewabilityConfig,
    gestureHandler,
    listStyle,
    rootStyle,
    onScroll,
    scrollX,
  } = useStoryModal(
    flatListRef,
    userStoryIndex ?? -1,
    backgroundColor,
    onScrollBeginDrag,
    onScrollEndDrag,
    handleLongPress,
    onComplete,
  );

  useEffect(() => {
    onUserStoryIndexChange?.(storyIndex);
  }, [onUserStoryIndexChange, storyIndex]);

  if (!visible) {
    return <View />;
  }

  const nextStory = () => {
    if (storyIndex + 1 === stories.length) {
      onComplete?.();
      return;
    }
    if (storyIndex >= stories.length - 1) {
      return;
    }
    flatListRef.current?.scrollToIndex({
      index: storyIndex + 1,
      animated: true,
    });
  };

  const previousStory = () => {
    if (storyIndex === 0) {
      return;
    }
    flatListRef.current?.scrollToIndex({
      index: storyIndex - 1,
      animated: true,
    });
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={() => onComplete?.()}>
      <GestureHandlerRootView style={rootStyle}>
        <PanGestureHandler
          activateAfterLongPress={200}
          onGestureEvent={gestureHandler}>
          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={listStyle}
            pagingEnabled
            initialNumToRender={2}
            data={stories}
            ref={flatListRef}
            onScroll={onScroll}
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
            scrollEventThrottle={16}
            initialScrollIndex={storyIndex}
            keyboardShouldPersistTaps="handled"
            getItemLayout={(_, index) => ({
              length: WIDTH,
              offset: WIDTH * index,
              index,
            })}
            onLayout={() => setIsTransitionActive(true)}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewabilityConfig.current}
            decelerationRate={Platform.OS == 'ios' ? 0.99 : 0.92}
            keyExtractor={(item, index) =>
              item?.title + item?.id?.toString() + index.toString()
            }
            contentContainerStyle={{
              width: WIDTH * stories.length,
            }}
            extraData={storyIndex}
            renderItem={({ item, index }) => (
              <StoryListItem
                key={index}
                ref={(elements: any) => (itemsRef.current[index] = elements)}
                {...{
                  item,
                  index,
                  nextStory,
                  previousStory,
                  storyIndex,
                  onComplete,
                  viewedStories,
                  scrollX,
                  isTransitionActive,
                }}
              />
            )}
          />
        </PanGestureHandler>
      </GestureHandlerRootView>
    </Modal>
  );
}
