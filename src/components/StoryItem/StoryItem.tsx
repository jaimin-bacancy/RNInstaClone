import { Icons } from '@/assets';
import { useStyle } from '@/hooks';
import { StoryResponse } from '@/models';
import { strings } from '@/translations';
import React, { useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './StoryItem.styles';

type StoryItemPropTypes = {
  isSelfView: boolean;
  user: StoryResponse;
};

export function StoryItem({
  isSelfView,
  user,
}: StoryItemPropTypes): JSX.Element {
  const { styles } = useStyle(style);

  const source = useMemo(() => {
    return typeof user.image === 'string' ? { uri: user.image } : user.image;
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={
          user.isViewed || isSelfView
            ? ['#A1A1A1', '#A1A1A1']
            : ['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5']
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}>
        <View style={styles.innerContainer}>
          <Image source={source} style={styles.imgUser} />
        </View>
      </LinearGradient>
      {isSelfView && (
        <View style={styles.viewAdd}>
          <Image source={Icons.add_circle} style={styles.imgAdd} />
        </View>
      )}
      <Text style={styles.textUserName} numberOfLines={1}>
        {isSelfView ? strings.yourStory : user?.name}
      </Text>
    </View>
  );
}
