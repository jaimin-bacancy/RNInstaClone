import { Icons } from '@/assets';
import { useStyle } from '@/hooks';
import { MediaResponse, PostResponse } from '@/models';
import { Layout } from '@/theme';
import React, { useCallback } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import DoubleTap from '../DoubleTap/DoubleTap';
import style from './PostItem.styles';

type PostItemPropTypes = {
  post: PostResponse;
  onLike: Function;
};

type BottomActionsPropTypes = {
  styles: any;
  reanimatedStyle: any;
  likeButtonScale: SharedValue<number>;
  post: PostResponse;
  onLike: Function;
};

const AnimatedImage = Animated.createAnimatedComponent(Image);

function BottomAction({ icon, styles }) {
  return (
    <View style={styles.viewActionButton}>
      <Image
        source={icon}
        style={[styles.imgActionButton, styles.imgActionColor]}
      />
    </View>
  );
}

function BottomActionsView({
  styles,
  reanimatedStyle,
  likeButtonScale,
  post,
  onLike,
}: BottomActionsPropTypes) {
  return (
    <View style={styles.viewActionButtons}>
      <View style={Layout.row}>
        <TouchableOpacity
          onPress={() => {
            onLike();
            likeButtonScale.value = withSpring(1, undefined, isFinished => {
              if (isFinished) {
                likeButtonScale.value = withDelay(200, withSpring(0));
              }
            });
          }}
          style={styles.viewActionButton}>
          <AnimatedImage
            source={post.isLiked ? Icons.favorite_red : Icons.favorite_border}
            style={[
              styles.imgActionButton,
              reanimatedStyle,
              !post.isLiked && styles.imgActionColor,
            ]}
          />
        </TouchableOpacity>
        <BottomAction icon={Icons.comment} styles={styles} />
        <BottomAction icon={Icons.send} styles={styles} />
      </View>
      <BottomAction icon={Icons.save} styles={styles} />
    </View>
  );
}

export function PostItem({ post, onLike }: PostItemPropTypes): JSX.Element {
  const { styles } = useStyle(style);

  const scale = useSharedValue(0);
  const likeButtonScale = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const doubleTap = useCallback(() => {
    onLike();
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(200, withSpring(0));
      }
    });

    likeButtonScale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        likeButtonScale.value = withDelay(200, withSpring(0));
      }
    });
  }, []);

  const reanimatedBottomStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(likeButtonScale.value, 1) }],
  }));

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {post.images.map((item: MediaResponse, index: number) => {
          return (
            <DoubleTap
              key={index}
              singleTap={() => {}}
              doubleTap={doubleTap}
              delay={200}>
              <Animated.View>
                <ImageBackground
                  source={{ uri: item.url }}
                  resizeMode="cover"
                  style={styles.imgPost}>
                  <AnimatedImage
                    source={Icons.favorite}
                    style={[styles.imgFavorite, reanimatedStyle]}
                  />
                </ImageBackground>
              </Animated.View>
            </DoubleTap>
          );
        })}
      </ScrollView>
      <BottomActionsView
        styles={styles}
        post={post}
        likeButtonScale={likeButtonScale}
        onLike={() => onLike(!post.isLiked)}
        reanimatedStyle={reanimatedBottomStyle}
      />
    </View>
  );
}
