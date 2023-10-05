import { Icons } from '@/assets';
import { useStyle } from '@/hooks';
import { Layout } from '@/theme';
import React from 'react';
import { Image, View } from 'react-native';
import style from './Header.styles';

type HeaderPropTypes = {
  isShowLogo: boolean;
  rightIcon: number;
  secondRightIcon: number;
};

type LogoPropTypes = {
  styles: any;
};

function LogoView({ styles }: LogoPropTypes) {
  return (
    <View>
      <Image source={Icons.instagram} style={styles.logoView} />
    </View>
  );
}

export function Header({
  isShowLogo = true,
  rightIcon,
  secondRightIcon,
}: HeaderPropTypes): JSX.Element {
  const { styles } = useStyle(style);

  return (
    <View style={styles.container}>
      {isShowLogo ? <LogoView styles={styles} /> : <View />}
      <View style={[Layout.row, Layout.alignItemsCenter]}>
        {secondRightIcon && (
          <Image source={secondRightIcon} style={styles.imgRight} />
        )}
        {rightIcon && <Image source={rightIcon} style={styles.imgRight} />}
      </View>
    </View>
  );
}
