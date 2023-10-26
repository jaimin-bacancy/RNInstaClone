import { Icons } from '@/assets';
import { DoubleTap, Marquee } from '@/components';
import { useStyle } from '@/hooks';
import { Layout } from '@/theme';
import { strings } from '@/translations';
import ReadMore from '@fawazahmed/react-native-read-more';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import style from './ReelItem.styles';

type ReelItemPropTypes = {
  item: {};
  viewableItem: any;
  onSharePress: Function;
  onCommentPress: Function;
  onLikePress: Function;
  onDislikePress: Function;
  onFinishPlaying: Function;
  onMorePress: Function;
};

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

  return (
    <DoubleTap singleTap={() => {}} doubleTap={doubleTap} delay={200}>
      <View style={styles.container}>
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
      </View>
    </DoubleTap>
  );
}
