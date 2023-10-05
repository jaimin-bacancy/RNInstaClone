import { Icons } from '@/assets';
import {
  Header,
  InstagramStoryLoader,
  PostItem,
  StoryItem,
} from '@/components';
import { useStyle } from '@/hooks';
import { Posts, Stories } from '@/mocks';
import { PostResponse } from '@/models';
import React, { useMemo, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import style from './Home.styles';

type PostsListPropTypes = {
  data: PostResponse[];
  setData: Function;
};

function StoriesList({ styles }) {
  const sorted = useMemo(() => {
    return Stories.sort(function (x, y) {
      return Number(x.isViewed) - Number(y.isViewed);
    });
  }, []);

  return (
    <View style={styles.viewStories}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <StoryItem
          isSelfView
          user={{ image: Icons.user_1, isViewed: true, name: 'Jaimin' }}
        />
        {sorted.map((item, index) => {
          return <StoryItem key={index} user={item} isSelfView={false} />;
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
          <PostItem
            key={index}
            post={item}
            onLike={(isLiked: boolean) => onLike(setData, index, isLiked)}
          />
        );
      }}
    />
  );
}

export function Home(): JSX.Element {
  const { styles } = useStyle(style);
  const [posts, setPosts] = useState([...Posts]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          isShowLogo
          rightIcon={Icons.chat}
          secondRightIcon={Icons.favorite_border}
        />
        <InstagramStoryLoader />
        <StoriesList styles={styles} />
        <PostsList data={posts} setData={setPosts} />
      </ScrollView>
    </View>
  );
}
