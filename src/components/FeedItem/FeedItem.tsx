import { Icons } from '@/assets';
import { useStyle, useTheme } from '@/hooks';
import { MediaResponse, PostResponse } from '@/models';
import { Layout, WIDTH } from '@/theme';
import React, { useCallback, useRef } from 'react';
import {
  Image,
  ImageBackground,
  Animated as RNAnimated,
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
import style from './FeedItem.styles';

type FeedItemPropTypes = {
  post: PostResponse;
  onLike: Function;
  onItemClick: Function;
};

type BottomActionsPropTypes = {
  styles: any;
  reanimatedStyle: any;
  likeButtonScale: SharedValue<number>;
  post: PostResponse;
  onLike: Function;
  scrollX: RNAnimated.Value;
};

type ScrollingDotsPropTypes = {
  post: PostResponse;
  scrollX: RNAnimated.Value;
  styles: any;
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

function ScrollingDots({ post, styles, scrollX }: ScrollingDotsPropTypes) {
  const { colors } = useTheme();
  return (
    <>
      {post.images.length > 1 && (
        <View style={styles.indicatorContainer}>
          <View style={styles.indicatorInnerContainer}>
            {post.images.map((image, imageIndex) => {
              const color = scrollX.interpolate({
                inputRange: [
                  WIDTH * (imageIndex - 1),
                  WIDTH * imageIndex,
                  WIDTH * (imageIndex + 1),
                ],
                outputRange: [colors.black, colors.primary, colors.black],
                extrapolate: 'clamp',
              });
              return (
                <RNAnimated.View
                  key={imageIndex}
                  style={[styles.normalDot, { backgroundColor: color }]}
                />
              );
            })}
          </View>
        </View>
      )}
    </>
  );
}

function BottomActionsView({
  styles,
  reanimatedStyle,
  likeButtonScale,
  post,
  onLike,
  scrollX,
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
      <ScrollingDots post={post} scrollX={scrollX} styles={styles} />
      <View>
        <BottomAction icon={Icons.save} styles={styles} />
      </View>
    </View>
  );
}

export function FeedItem({
  post,
  onLike,
  onItemClick,
}: FeedItemPropTypes): JSX.Element {
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
  }, [likeButtonScale, onLike, scale]);

  const reanimatedBottomStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(likeButtonScale.value, 1) }],
  }));

  const scrollX = useRef(new RNAnimated.Value(0)).current;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={RNAnimated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={1}>
        {post.images.map((item: MediaResponse, index: number) => {
          return (
            <DoubleTap
              key={index}
              singleTap={onItemClick}
              doubleTap={doubleTap}
              delay={200}>
              <Animated.View>
                <ImageBackground
                  source={{ uri: item.url }}
                  resizeMode="cover"
                  style={styles.imgPost}>
                  <AnimatedImage
                    sharedTransitionTag="sharedTransition"
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
        scrollX={scrollX}
      />
    </View>
  );
}
