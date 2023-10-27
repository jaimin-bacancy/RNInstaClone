import { Icons } from '@/assets';
import { ReelItem } from '@/components';
import { useStyle } from '@/hooks';
import { ReelsData } from '@/mocks';
import { ReelResponse } from '@/models';
import { goBack } from '@/navigators/NavigationRef';
import { HEIGHT, Layout, vs } from '@/theme';
import { strings } from '@/translations';
import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import style from './Reels.styles';

function Header({ styles }) {
  return (
    <View style={styles.viewHeader}>
      <View style={Layout.rowHCenter}>
        <Pressable style={styles.btnLeftArrow} onPress={goBack}>
          <Image source={Icons.arrow_left} style={styles.imgLeftArrow} />
        </Pressable>
        <Text style={styles.textReels}>{strings.reels}</Text>
      </View>
      <View style={Layout.rowHCenter}>
        <View style={styles.viewCamera}>
          <Image source={Icons.camera} style={styles.imgCamera} />
        </View>
      </View>
    </View>
  );
}

export function Reels(): JSX.Element {
  const { styles } = useStyle(style);
  const [data, setData] = useState([...ReelsData]);
  const flatListRef = useRef(null);
  const [viewableItem, setViewableItem] = useState('');
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 70 });
  const androidExtraHeight = vs(50) + (StatusBar.currentHeight ?? 0);

  const onViewRef = useRef(viewableItems => {
    if (viewableItems?.viewableItems?.length > 0) {
      setViewableItem(viewableItems.viewableItems[0].item._id || 0);
    }
  });

  function onMorePress(index: number) {
    console.log(`more :>> ${index}`, 'called');
  }

  function onSharePress(index: number) {
    console.log(`share :>> ${index}`, 'called');
  }

  function onCommentPress(index: number) {
    console.log(`comment :>> ${index}`, 'called');
  }

  function onLikePress(index: number) {
    setData((prevState: ReelResponse[]) => {
      const allData = [...prevState];

      if (!allData[index].isLike) {
        allData[index].isLike = true;
        allData[index].stats.like++;
      }

      return allData;
    });
  }

  function onDislikePress(index: number) {
    setData((prevState: ReelResponse[]) => {
      const allData = [...prevState];

      if (allData[index].isLike) {
        allData[index].isLike = false;
        allData[index].stats.like--;
      }

      return allData;
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ReelItem
            key={index}
            item={item}
            viewableItem={viewableItem}
            onSharePress={() => onSharePress(index)}
            onCommentPress={() => onCommentPress(index)}
            onLikePress={() => onLikePress(index)}
            onDislikePress={() => onDislikePress(index)}
            onMorePress={() => onMorePress(index)}
            onFinishPlaying={(finishedIndex: number) => {
              if (finishedIndex !== data.length - 1) {
                // @ts-ignore: Object is possibly 'null'.
                flatListRef.current.scrollToIndex({
                  index: finishedIndex + 1,
                });
              }
            }}
          />
        )}
        getItemLayout={(_data, index) => ({
          length:
            HEIGHT - (Platform.OS === 'ios' ? vs(140) : androidExtraHeight),
          offset:
            HEIGHT -
            (Platform.OS === 'ios' ? vs(140) : androidExtraHeight) * index,
          index,
        })}
        pagingEnabled
        decelerationRate={0.9}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <Header styles={styles} />
    </View>
  );
}
