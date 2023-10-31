import { Icons } from '@/assets';
import { useStyle } from '@/hooks';
import { ChatResponse } from '@/models';
import { Layout } from '@/theme';
import { strings } from '@/translations';
import { format, formatDistanceToNow } from 'date-fns';
import React from 'react';
import { Image, Text, View } from 'react-native';
import style from './ChatItem.styles';

type ChatItemPropTypes = {
  item: ChatResponse;
};

type CameraButtonNotifyDotContainerPropTypes = {
  item: ChatResponse;
  styles: any;
};

type CameraButtonPropTypes = {
  styles: any;
};

function CameraButtonNotifyDotContainer({
  item,
  styles,
}: CameraButtonNotifyDotContainerPropTypes) {
  return (
    <View style={styles.viewCameraAndDot}>
      <NotifyDot item={item} styles={styles} />
      <CameraButton styles={styles} />
    </View>
  );
}

function CameraButton({ styles }: CameraButtonPropTypes) {
  return (
    <View style={styles.btnCamera}>
      <Image source={Icons.camera} style={styles.imgCamera} />
    </View>
  );
}

function NotifyDot({ item, styles }: CameraButtonNotifyDotContainerPropTypes) {
  return (
    <View style={styles.viewUnSeenContainer}>
      {!item.isViewed && <View style={styles.viewUnSeen} />}
    </View>
  );
}

function LastMessageView({ item, styles }) {
  return (
    <View style={styles.viewLastMessage}>
      <Text
        style={[
          styles.textLastMessage,
          item.isViewed && styles.textSeenLastMessage,
        ]}
        numberOfLines={1}>
        {item.isSent
          ? strings.formatString(
              strings.sent_ago,
              formatDistanceToNow(item.createdAt),
            )
          : item.lastMessage ?? ''}
      </Text>
      <Text
        style={[styles.textTime, item.isSent && styles.sentTimeStyle]}
        numberOfLines={1}>
        {!item.isSent ? format(item.createdAt, 'mm') + 'm' : ''}
      </Text>
    </View>
  );
}

function UserNameView({ item, styles }) {
  return (
    <View style={styles.viewUserName}>
      <Text
        style={[styles.textUserName, item.isViewed && styles.textSeenUserName]}
        numberOfLines={1}>
        {item.name ?? ''}
      </Text>
    </View>
  );
}

function UserImageView({ styles, item }) {
  return (
    <View style={styles.viewUserImage}>
      <Image source={{ uri: item.image }} style={styles.imgUser} />
    </View>
  );
}

function GroupImageView({ styles, item }) {
  return (
    <View style={styles.containerGroupImage}>
      <View style={styles.viewGroupTopImage}>
        <Image source={{ uri: item.image }} style={styles.imgUser} />
      </View>
      <View style={styles.viewGroupImage}>
        <View style={styles.viewGroupTopImage}>
          <Image source={{ uri: item.image }} style={styles.imgUser} />
        </View>
      </View>
    </View>
  );
}

export function ChatItem({ item }: ChatItemPropTypes): JSX.Element {
  const { styles } = useStyle(style);

  return (
    <View style={styles.container}>
      {item.isGroup ? (
        <GroupImageView item={item} styles={styles} />
      ) : (
        <UserImageView item={item} styles={styles} />
      )}
      <View style={styles.viewUsernameLastMessage}>
        <View style={Layout.fill}>
          <UserNameView item={item} styles={styles} />
          <LastMessageView item={item} styles={styles} />
        </View>
        <CameraButtonNotifyDotContainer item={item} styles={styles} />
      </View>
    </View>
  );
}
