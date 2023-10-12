import { Icons } from '@/assets';
import { InstagramStoryLoader } from '@/components';
import { useStyle } from '@/hooks';
import { MediaResponse } from '@/models';
import { hs } from '@/theme';
import React from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import style from './StoryModal.styles';
import useStoryModal from './hooks/useStoryModal';

export function StoryModal(): JSX.Element {
  const { getter, setter } = useStoryModal();
  const { storyId, width, linear, duration, currentStep, data } = getter;
  const { onStoryPress, onPause, onResume } = setter;
  const { styles } = useStyle(style);

  return (
    <View style={styles.container}>
      <View style={styles.viewLoaders}>
        {data[storyId].medias.map((item: MediaResponse, index: number) => {
          return (
            <View
              key={index}
              style={[styles.loaderContainer, { width: width - hs(4) }]}>
              <InstagramStoryLoader
                width={width - hs(4)}
                key={index}
                linear={linear}
                onStoryPress={onStoryPress}
                isCurrent={currentStep === index}
                isViewed={item.isViewed ?? false}
                duration={duration}
              />
            </View>
          );
        })}
      </View>
      <Pressable
        style={styles.contentContainer}
        onPress={() => onStoryPress()}
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
