import { Icons } from '@/assets';
import { useStyle } from '@/hooks';
import React from 'react';
import { Image, Text, View } from 'react-native';
import style from './SearchItemPreview.styles';

type SearchItemPreviewProps = { image: any };

export function SearchItemPreview({ image }: SearchItemPreviewProps) {
  const { styles } = useStyle(style);

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.viewUsernameImage}>
          <Image source={image} style={styles.imgUser} />
          <Text style={styles.textUsername}>{'Bacancy'}</Text>
        </View>
        <View style={{}}>
          <Image source={image} style={styles.imgPreview} />
          <View style={styles.viewBottomActions}>
            <Image source={Icons.like} style={styles.imgAction} />
            <Image source={Icons.profile} style={styles.imgAction} />
            <Image source={Icons.send} style={styles.imgAction} />
            <Image source={Icons.more_vert} style={styles.imgAction} />
          </View>
        </View>
      </View>
    </View>
  );
}
