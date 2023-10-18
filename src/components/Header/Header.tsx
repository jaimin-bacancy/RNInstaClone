import { Icons } from '@/assets';
import { useStyle } from '@/hooks';
import { Layout } from '@/theme';
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './Header.styles';

type HeaderPropTypes = {
  isShowLogo: boolean;
  rightIcon: number;
  secondRightIcon: number;
  onRightPress?: ((event: GestureResponderEvent) => void) | undefined;
  onSecondRightPress?: ((event: GestureResponderEvent) => void) | undefined;
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
  onRightPress,
  onSecondRightPress,
}: HeaderPropTypes): JSX.Element {
  const { styles } = useStyle(style);

  return (
    <View style={styles.container}>
      {isShowLogo ? <LogoView styles={styles} /> : <View />}
      <View style={[Layout.row, Layout.alignItemsCenter]}>
        {secondRightIcon && (
          <TouchableOpacity onPress={onSecondRightPress}>
            <Image source={secondRightIcon} style={styles.imgRight} />
          </TouchableOpacity>
        )}
        {rightIcon && (
          <TouchableOpacity onPress={onRightPress}>
            <Image source={rightIcon} style={styles.imgRight} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
