/* eslint-disable @typescript-eslint/no-unused-vars */
import { Icons } from '@/assets';
import { DoubleTap, Marquee } from '@/components';
import { useStyle } from '@/hooks';
import { ReelResponse } from '@/models';
import { HEIGHT, Layout, WIDTH, vs } from '@/theme';
import { strings } from '@/translations';
import ReadMore from '@fawazahmed/react-native-read-more';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import Video from 'react-native-video';
import style from './ReelItem.styles';

type ReelItemPropTypes = {
  item: ReelResponse;
  viewableItem: any;
  onSharePress: Function;
  onCommentPress: Function;
  onLikePress: Function;
  onDislikePress: Function;
  onFinishPlaying: Function;
  onMorePress: Function;
};

const androidExtraHeight = vs(50) + (StatusBar.currentHeight ?? 0);

function ActionView({ count, icon, styles, onActionPress = () => {} }) {
  return (
    <View style={styles.viewAction}>
      <TouchableOpacity onPress={onActionPress} style={styles.btnAction}>
        <Image
          source={icon}
          style={[styles.imgAction, styles.imgActionColor]}
        />
      </TouchableOpacity>
      <Text style={styles.textCount}>{count ?? ''}</Text>
    </View>
  );
}

function LikeButton({
  item,
  styles,
  onDislikePress,
  onLikePress,
  reanimatedStyle,
  likeButtonScale,
}) {
  return (
    <View style={styles.viewAction}>
      <TouchableOpacity
        onPress={() => {
          item.isLike ? onDislikePress() : onLikePress();
          likeButtonScale.value = withSpring(1, undefined, isFinished => {
            if (isFinished) {
              likeButtonScale.value = withDelay(200, withSpring(0));
            }
          });
        }}
        style={styles.btnAction}>
        <Animated.Image
          source={item.isLike ? Icons.favorite_red : Icons.favorite_border}
          style={[
            styles.imgAction,
            reanimatedStyle,
            !item.isLike && styles.imgActionColor,
          ]}
        />
      </TouchableOpacity>
      <Text style={styles.textCount}>{item.stats.like ?? ''}</Text>
    </View>
  );
}

function StateView({
  item,
  styles,
  onSharePress,
  onCommentPress,
  onLikePress,
  onDislikePress,
  onMorePress,
  reanimatedStyle,
  likeButtonScale,
}) {
  return (
    <View style={styles.viewState}>
      <LikeButton
        item={item}
        onDislikePress={onDislikePress}
        onLikePress={onLikePress}
        likeButtonScale={likeButtonScale}
        reanimatedStyle={reanimatedStyle}
        styles={styles}
      />
      <ActionView
        count={item.stats.comment}
        icon={Icons.comment}
        styles={styles}
        onActionPress={onCommentPress}
      />
      <ActionView
        count={item.stats.share}
        icon={Icons.send}
        styles={styles}
        onActionPress={onSharePress}
      />
      <ActionView
        count={''}
        onActionPress={onMorePress}
        icon={Icons.more_vert}
        styles={styles}
      />
    </View>
  );
}

function DetailsView({ item, styles }) {
  return (
    <View style={styles.viewDetails}>
      <View style={Layout.rowHCenter}>
        <View style={styles.viewUserImage}>
          <Image source={{ uri: item.userImage }} style={styles.imgUser} />
        </View>
        <View style={styles.viewUserName}>
          <Text style={styles.textUserName} numberOfLines={1}>
            {item.name ?? ''}
          </Text>
        </View>
      </View>
      <CaptionView styles={styles} />
      <MediaView item={item} styles={styles} />
    </View>
  );
}

function CaptionView({ styles }) {
  const [expandAnswer, setExpandAnswer] = useState(true);

  const toggleReadMoreDots = () => {
    setExpandAnswer(!expandAnswer);
  };

  return (
    <View style={styles.captionContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReadMore
          numberOfLines={3}
          style={styles.viewCaption}
          seeMoreText=""
          seeLessText=""
          collapsed={expandAnswer}
          expandOnly={false}
          onPress={toggleReadMoreDots}>
          {strings.shortDesc}
        </ReadMore>
      </ScrollView>
    </View>
  );
}

function MediaView({ item, styles }) {
  return (
    <View style={styles.viewMedia}>
      <View style={styles.viewArrow}>
        <Image source={Icons.music_note} style={styles.imgArrow} />
      </View>
      <Marquee spacing={20} speed={0.5}>
        <Text numberOfLines={1} style={styles.textMediaName}>
          {`${item.media.title} * ${item.media.artist}`}
        </Text>
      </Marquee>
    </View>
  );
}

export function ReelItem({
  item,
  viewableItem,
  onSharePress,
  onCommentPress,
  onLikePress,
  onDislikePress,
  onMorePress,
}: ReelItemPropTypes): JSX.Element {
  const { styles } = useStyle(style);

  const scale = useSharedValue(0);
  const likeButtonScale = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const reanimatedBottomStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(likeButtonScale.value, 1) }],
  }));

  const doubleTap = useCallback(() => {
    onLikePress();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likeButtonScale, scale]);

  const VideoPlayer = useRef(null);

  const width = WIDTH;
  const height =
    HEIGHT - (Platform.OS === 'ios' ? vs(140) : androidExtraHeight);

  // States
  const [VideoDimensions, SetVideoDimensions] = useState({
    width,
    height: WIDTH,
  });

  const [progress, SetProgress] = useState(0);
  const [duration, SetDuration] = useState(0);
  const [Paused, SetPaused] = useState(false);
  const [ShowOptions, SetShowOptions] = useState(false);

  // Play/Pause video according to visibility
  useEffect(() => {
    if (viewableItem === item?._id) {
      SetPaused(false);
    } else {
      SetPaused(true);
    }
  }, [item?._id, viewableItem]);

  // Pause when use toggle options to True
  useEffect(() => {
    const pauseOnOptionsShow = true;
    if (pauseOnOptionsShow) {
      if (ShowOptions) {
        SetPaused(true);
      } else {
        SetPaused(false);
      }
    }
  }, [ShowOptions]);

  // // Callback for Seek Update

  // Callback for PlayBackStatusUpdate
  const PlayBackStatusUpdate = playbackStatus => {
    try {
      const currentTime = Math.round(playbackStatus.currentTime);
      const seekableDuration = Math.round(playbackStatus.seekableDuration);
      if (currentTime) {
        if (seekableDuration) {
          SetProgress((currentTime / seekableDuration) * 100);
        }
      }
    } catch (error) {}
  };

  // function for getting video dimensions on load complete
  const onLoadComplete = event => {
    const { naturalSize } = event;

    try {
      const naturalWidth = naturalSize.width;
      const naturalHeight = naturalSize.height;
      if (naturalWidth > naturalHeight) {
        SetVideoDimensions({
          width: width,
          height: width * (naturalHeight / naturalWidth),
        });
      } else {
        SetVideoDimensions({
          width: height * (naturalWidth / naturalHeight),
          height: height,
        });
      }
      SetDuration(event.duration * 1000);
    } catch (error) {}
  };

  // function for showing options
  const onMiddlePress = (isPause: boolean) => {
    try {
      SetShowOptions(isPause);
    } catch (error) {}
  };

  // Manage error here
  const videoError = error => {
    console.log('error :>> ', error);
  };

  return (
    <DoubleTap singleTap={() => {}} doubleTap={doubleTap} delay={200}>
      <Pressable
        delayLongPress={200}
        onLongPress={() => onMiddlePress(true)}
        onPressOut={() => onMiddlePress(false)}
        style={styles.container}>
        <Video
          ref={VideoPlayer}
          source={{ uri: item?.uri }}
          style={VideoDimensions}
          resizeMode="contain"
          onError={videoError}
          playInBackground={false}
          progressUpdateInterval={1000}
          paused={Paused}
          muted={false}
          repeat={true}
          onLoad={onLoadComplete}
          onProgress={PlayBackStatusUpdate}
          onEnd={() => () => {}}
        />
        <DetailsView item={item} styles={styles} />
        <StateView
          item={item}
          styles={styles}
          onSharePress={onSharePress}
          onCommentPress={onCommentPress}
          onLikePress={onLikePress}
          onDislikePress={onDislikePress}
          onMorePress={onMorePress}
          reanimatedStyle={reanimatedBottomStyle}
          likeButtonScale={likeButtonScale}
        />
        <Animated.Image
          source={Icons.favorite}
          style={[styles.imgFavorite, reanimatedStyle]}
        />
      </Pressable>
    </DoubleTap>
  );
}
