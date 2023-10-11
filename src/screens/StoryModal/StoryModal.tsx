import { Icons } from '@/assets';
import { InstagramStoryLoader } from '@/components';
import { useStyle } from '@/hooks';
import { Stories } from '@/mocks';
import { MediaResponse } from '@/models';
import { hs } from '@/theme';
import React from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import style from './StoryModal.styles';
import useStoryModal from './hooks/useStoryModal';

export function StoryModal(): JSX.Element {
  const { getter, setter } = useStoryModal();
  const { storyId, width, linear, duration, currentStep } = getter;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onStoryPress, onPause, onResume } = setter;
  const { styles } = useStyle(style);

  console.log('currentStep', currentStep);

  return (
    <View style={styles.container}>
      <View style={styles.viewLoaders}>
        {Stories[storyId].medias.map((item: MediaResponse, index: number) => {
          return (
            <View
              key={index}
              style={[styles.loaderContainer, { width: width - hs(4) }]}>
              <InstagramStoryLoader
                width={width - hs(4)}
                key={index}
                linear={linear}
                isCurrent={currentStep == index}
                isViewed={item.isViewed ?? false}
                duration={duration}
              />
            </View>
          );
        })}
      </View>
      <Pressable
        style={styles.contentContainer}
        // onPress={() => onStoryPress()}
        onPressIn={() => onPause()}
        onPressOut={onResume}>
        <ImageBackground
          source={Icons.post_1}
          style={styles.storyContainer}
          resizeMode={'contain'}
        />
      </Pressable>
    </View>
  );
}
