import { SearchBar, SearchItemPreview } from '@/components';
import { useStyle } from '@/hooks';
import { SearchData } from '@/mocks';
import { Layout } from '@/theme';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import style from './Search.styles';

const SearchContent = ({ data, styles }) => {
  return (
    <View>
      {SearchData.map((item, index) => {
        return (
          <View key={index}>
            {item.id === 0 ? (
              <View style={styles.viewImages}>
                {item.images.map((imageData, imgIndex) => {
                  return (
                    <Pressable
                      onLongPress={() => data(imageData)}
                      key={imgIndex}
                      onPressOut={() => data(null)}
                      style={styles.viewSmallImage}>
                      <Image source={imageData} style={styles.imgSmall} />
                    </Pressable>
                  );
                })}
              </View>
            ) : null}
            {item.id === 1 ? (
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <View style={styles.viewLarge}>
                  {item.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <Pressable
                        onLongPress={() => data(imageData)}
                        key={imgIndex}
                        onPressOut={() => data(null)}
                        style={styles.itemLarge}>
                        <Image source={imageData} style={styles.imgSmall} />
                      </Pressable>
                    );
                  })}
                </View>
                <Pressable
                  onLongPress={() => data(item.images[5])}
                  onPressOut={() => data(null)}
                  style={styles.viewLong}>
                  <Image source={item.images[5]} style={styles.imgLong} />
                </Pressable>
              </View>
            ) : null}
            {item.id === 2 ? (
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Pressable
                  onLongPress={() => data(item.images[2])}
                  onPressOut={() => data(null)}
                  style={styles.viewSquare}>
                  <Image
                    source={item.images[2]}
                    style={styles.imgLargeSquare}
                  />
                </Pressable>
                <View style={styles.viewLongImage}>
                  {item.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <Pressable
                        onLongPress={() => data(imageData)}
                        key={imgIndex}
                        onPressOut={() => data(null)}
                        style={styles.itemLong}>
                        <Image source={imageData} style={styles.imgSmall} />
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export function Search() {
  const { styles } = useStyle(style);
  const [image, setImage] = useState(null);
  const [searchText, setSearchText] = useState('');

  const getData = data => {
    setImage(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <SearchBar onChangeText={setSearchText} searchText={searchText} />
        <SearchContent data={getData} styles={styles} />
      </ScrollView>
      {image ? <SearchItemPreview image={image} /> : null}
    </View>
  );
}
