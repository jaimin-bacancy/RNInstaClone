import { Icons } from '@/assets';
import { FeedItem, Header, StoryItem } from '@/components';
import { useStyle } from '@/hooks';
import { Posts, StoriesPlaceholders } from '@/mocks';
import { PostResponse } from '@/models';
import { navigate } from '@/navigators/NavigationRef';
import React, { useMemo, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import style from './Feed.styles';

type PostsListPropTypes = {
  data: PostResponse[];
  setData: Function;
};

type StoriesListPropTypes = {
  styles: any;
  onRelease?: ((e) => void) | null | undefined;
  onPause?: ((e) => void) | null | undefined;
  onPress?: ((e) => void) | null | undefined;
};

function StoriesList({
  styles,
  onPress,
  onPause,
  onRelease,
}: StoriesListPropTypes) {
  const sorted = useMemo(() => {
    return StoriesPlaceholders.sort(function (x, y) {
      return Number(x.isViewed) - Number(y.isViewed);
    });
  }, []);

  return (
    <View style={styles.viewStories}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <StoryItem
          isSelfView
          user={{ image: Icons.user_1, isViewed: true, name: '' }}
        />
        {sorted.map((item, index) => {
          return (
            <StoryItem
              key={index}
              user={item}
              onPress={() => onPress?.(index)}
              isSelfView={false}
              onPressIn={onRelease}
              onPressOut={onPause}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const onLike = (setData: Function, index: number, isLike: boolean = true) => {
  setData((prevState: PostResponse[]) => {
    const allData = [...prevState];
    allData[index].isLiked = isLike;
    return allData;
  });
};

function PostsList({ data, setData }: PostsListPropTypes) {
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <FeedItem
            key={index}
            post={item}
            onLike={(isLiked: boolean) => onLike(setData, index, isLiked)}
            onItemClick={() => {}}
          />
        );
      }}
    />
  );
}

export function Feed(): JSX.Element {
  const { styles } = useStyle(style);
  const [posts, setPosts] = useState([...Posts]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          isShowLogo
          rightIcon={Icons.chat}
          secondRightIcon={Icons.favorite_border}
          onRightPress={() => navigate('AnimationListing')}
        />
        <StoriesList
          styles={styles}
          onPress={index => {
            navigate('StoryModal', {
              storyId: index,
            });
          }}
        />
        <PostsList data={posts} setData={setPosts} />
      </ScrollView>
    </View>
  );
}
