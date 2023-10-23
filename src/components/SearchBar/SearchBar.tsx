import { Icons } from '@/assets';
import { useStyle, useTheme } from '@/hooks';
import { strings } from '@/translations';
import React from 'react';
import { Image, TextInput, View } from 'react-native';
import style from './SearchBar.styles';

type SearchBarPropTypes = {
  searchText: string;
  onChangeText: ((text: string) => void) | undefined;
};

export function SearchBar({
  searchText,
  onChangeText,
}: SearchBarPropTypes): JSX.Element {
  const { styles } = useStyle(style);
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.viewSearchIcon}>
        <Image source={Icons.search} style={styles.imgSearch} />
      </View>
      <View style={styles.viewSearchInput}>
        <TextInput
          style={styles.inputSearch}
          value={searchText}
          placeholder={strings.search}
          placeholderTextColor={colors.textGray200}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}
