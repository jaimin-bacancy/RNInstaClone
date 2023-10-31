import { useStyle } from '@/hooks';
import { Spacing } from '@/theme';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import ProgressView from '../ProgressView/ProgressView';
import { StoryContainerProps, StoryRef } from '../StoryModal/types';
import { StoryView } from '../StoryView/StoryView';
import style from './../ProgressBar/ProgressBar.styles';
import useStoryContainer from './hooks/useStoryContainer';

export const StoryContainer = forwardRef<StoryRef, StoryContainerProps>(
  (
    {
      renderHeaderComponent,
      renderFooterComponent,
      renderCustomView,
      userStories,
      enableProgress = true,
      headerViewProps,
      customViewProps,
      footerViewProps,
      progressViewProps,
      storyContainerViewProps,
      ...props
    }: StoryContainerProps,
    ref,
  ) => {
    const { styles } = useStyle(style);

    const viewedStories = useRef<boolean[]>(
      Array(props?.stories?.length)
        .fill(props?.stories)
        .map((item, index) => item?.[index]?.isViewed ?? false),
    );

    const {
      progressIndex,
      isPause,
      setPause,
      isLoaded,
      duration,
      opacity,
      onImageLoaded,
      onVideoLoaded,
      changeStory,
      setLoaded,
      setDuration,
      videoDuration,
      onVideoProgress,
      onVideoEnd,
      onArrowClick,
      onStoryPressHold,
      isKeyboardVisible,
      setVideoDuration,
      onStoryPressRelease,
      setVisibleElements,
      rootStyle,
      containerStyle,
    } = useStoryContainer(props, viewedStories);

    const viewRef = useRef<View>(null);

    useImperativeHandle(ref, () => ({
      pause: (pause: boolean) => {
        if (props?.index === props?.userStoryIndex) {
          setPause(pause);
        }
      },
      handleLongPress: (visibility: boolean) => {
        if (props?.index === props?.userStoryIndex) {
          setVisibleElements(!visibility);
          setPause(visibility);
        }
      },

      viewedStories: viewedStories.current,
    }));

    useEffect(() => {
      setLoaded(false);
      setDuration(props.stories?.[progressIndex]?.duration ?? 5);
    }, [progressIndex, props.stories, setDuration, setLoaded]);

    const storyViewContent = () => {
      return (
        <>
          <View
            onLayout={({ nativeEvent }) => {
              if (isKeyboardVisible) {
                return;
              }
              const { height } = nativeEvent.layout;
              viewRef?.current?.setNativeProps({ height });
            }}
            style={props?.containerStyle ?? styles.parentView}
            {...storyContainerViewProps}>
            <TouchableOpacity
              activeOpacity={1}
              delayLongPress={200}
              onPress={(e: { nativeEvent: any }) => changeStory(e.nativeEvent)}
              onLongPress={onStoryPressHold}
              onPressOut={onStoryPressRelease}>
              <StoryView
                viewRef={viewRef}
                duration={duration}
                onVideoLoaded={onVideoLoaded}
                onImageLoaded={onImageLoaded}
                progressIndex={progressIndex}
                videoDuration={videoDuration}
                onVideoEnd={onVideoEnd}
                onVideoProgress={onVideoProgress}
                pause={isPause}
                index={props?.index ?? 0}
                storyIndex={props?.userStoryIndex ?? 0}
                stories={props.stories}
                imageStyle={props.imageStyle}
                videoProps={props?.videoProps}
                sourceIndicatorProps={props?.sourceIndicatorProps}
                showSourceIndicator={props?.showSourceIndicator ?? true}
              />
            </TouchableOpacity>
            {enableProgress && (
              <View
                style={[styles.progressView, { opacity }]}
                {...progressViewProps}>
                <ProgressView
                  next={() => onArrowClick('right')}
                  isLoaded={isLoaded}
                  duration={duration}
                  storyIndex={props?.userStoryIndex ?? 0}
                  currentIndex={progressIndex}
                  setVideoDuration={setVideoDuration}
                  index={props?.index ?? 0}
                  videoDuration={videoDuration ?? 0}
                  pause={enableProgress && isPause}
                  stories={props?.stories}
                  barStyle={props?.barStyle}
                  currentStory={props?.stories[progressIndex]}
                  length={props?.stories?.map((_, i) => i)}
                  progress={{ id: progressIndex }}
                />
              </View>
            )}
            {renderHeaderComponent && (
              <View
                style={[styles.topView, props?.headerStyle ?? {}, { opacity }]}
                {...headerViewProps}>
                <>
                  {renderHeaderComponent?.({
                    userStories,
                    story: props?.stories,
                    progressIndex,
                    userStoryIndex: props?.userStoryIndex,
                  })}
                </>
              </View>
            )}
            {renderCustomView && (
              <View
                style={[
                  styles.customView,
                  props?.customViewStyle ?? {},
                  { opacity },
                ]}
                {...customViewProps}>
                <>
                  {renderCustomView?.({
                    userStories,
                    story: props?.stories,
                    progressIndex,
                    userStoryIndex: props?.userStoryIndex,
                  })}
                </>
              </View>
            )}
          </View>
          {renderFooterComponent && (
            <View
              style={[styles.bottomView, props?.footerStyle ?? {}, { opacity }]}
              {...footerViewProps}>
              <>
                {renderFooterComponent?.({
                  userStories,
                  story: props?.stories,
                  progressIndex,
                  userStoryIndex: props?.userStoryIndex,
                })}
              </>
            </View>
          )}
        </>
      );
    };

    return (
      <SafeAreaView style={rootStyle}>
        <KeyboardAvoidingView
          style={containerStyle}
          keyboardVerticalOffset={Spacing.keyboardVerticalOffset}
          behavior={'padding'}>
          {props.visible && storyViewContent()}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  },
);
