import { useStyle } from '@/hooks';
import React, { useCallback } from 'react';
import { Animated } from 'react-native';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { ProgressBarsProps, ProgressState } from '../StoryModal/types';
import style from './../ProgressBar/ProgressBar.styles';

export function ProgressView(props: ProgressBarsProps) {
  const { styles } = useStyle(style);
  const getProgressState = useCallback(
    (i: number) => {
      if (props?.pause) {
        return ProgressState.Paused;
      } else if (i === props.currentIndex) {
        return ProgressState.InProgress;
      } else if (i < props.currentIndex) {
        return ProgressState.Completed;
      }
      return ProgressState.Default;
    },
    [props?.pause, props.currentIndex],
  );

  return (
    <Animated.View style={[styles.progressBarArray, props?.progressBarStyle]}>
      {props.length.map((i: number, index) => (
        <ProgressBar
          index={index}
          key={i}
          storyType={props?.stories[index].type}
          storyIndex={props?.storyIndex}
          currentUserIndex={props?.index}
          barStyle={props.barStyle}
          videoDuration={props?.videoDuration}
          setVideoDuration={props?.setVideoDuration}
          duration={props.duration || 3}
          currentIndex={props.currentIndex}
          next={props?.next}
          length={props?.stories?.length}
          active={getProgressState(i)}
          isLoaded={props?.isLoaded}
          pause={props?.pause}
        />
      ))}
    </Animated.View>
  );
}

export default ProgressView;
