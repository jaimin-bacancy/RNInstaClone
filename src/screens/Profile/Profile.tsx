import { Icons } from '@/assets';
import { ROUTES } from '@/constants';
import { useStyle } from '@/hooks';
import { navigate } from '@/navigators/NavigationRef';
import { ProfileTabNavigator } from '@/navigators/ProfileTab.navigator';
import { Layout } from '@/theme';
import { strings } from '@/translations';
import React, { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import style from './Profile.styles';

function ProfileBody({
  name,
  accountName,
  bio,
  profileImage,
  posts,
  followers,
  following,
  styles,
}) {
  return (
    <View>
      {accountName ? (
        <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
          <View style={Layout.rowHCenter}>
            <Text style={styles.textHeaderUserName}>{accountName}</Text>
            <Image source={Icons.arrow_down} style={styles.imgArrowDown} />
          </View>
          <View style={Layout.rowHCenter}>
            <Image source={Icons.upload} style={styles.imgUpload} />
            <Image source={Icons.menu} style={styles.imgUpload} />
          </View>
        </View>
      ) : null}
      <View style={styles.viewStatsContainer}>
        <View style={{}}>
          <Image source={profileImage} style={styles.imgUserImage} />
          <Text style={styles.textUsername}>{name}</Text>
          <Text style={styles.textBio}>{bio}</Text>
        </View>
        <View style={styles.viewStats}>
          <StatsView label={strings.posts} stats={posts} styles={styles} />
          <StatsView
            label={strings.followers}
            stats={followers}
            styles={styles}
          />
          <StatsView
            label={strings.following}
            stats={following}
            styles={styles}
          />
        </View>
      </View>
    </View>
  );
}

function StatsView({ stats, label, styles }) {
  return (
    <View style={Layout.alignItemsCenter}>
      <Text style={styles.textStatsCount}>{stats}</Text>
      <Text style={styles.textStatsCountLabel}>{label}</Text>
    </View>
  );
}

function ProfileButtons({ id, name, accountName, profileImage, styles }) {
  const [follow, setFollow] = useState(false);

  return (
    <>
      {id === 0 ? (
        <View style={styles.viewCurrentUser}>
          <TouchableOpacity
            onPress={() =>
              navigate(ROUTES.EditProfile, {
                name: name,
                accountName: accountName,
                profileImage: profileImage,
              })
            }
            style={Layout.fullWidth}>
            <View style={styles.btnEditProfile}>
              <Text style={styles.textEditProfile}>{strings.editProfile}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.viewCurrentUser}>
          <TouchableOpacity
            onPress={() => setFollow(!follow)}
            style={styles.btnFollowFollowing}>
            <View style={[styles.btnFollow, !follow && styles.btnFollowing]}>
              <Text
                style={[styles.textFollowing, !follow && styles.textFollow]}>
                {follow ? strings.following : strings.follow}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.btnMessage}>
            <Text style={[styles.textFollowing, styles.textFollow]}>
              {strings.message}
            </Text>
          </View>
        </View>
      )}
    </>
  );
}

function StoryHighlights({ circles, styles }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <View style={styles.viewStoryHighlights}>
      <Pressable
        onPress={() => setIsShown(!isShown)}
        style={[Layout.row, Layout.justifyContentBetween]}>
        <View>
          <Text style={styles.textStoryHighlights}>
            {strings.storyHighlights}
          </Text>
          {isShown && (
            <Text style={styles.textKeepYourFavorite}>
              {strings.keepYourFavoriteStories}
            </Text>
          )}
        </View>
        <View>
          <Image
            source={Icons.arrow_down}
            style={[styles.imgArrowDown, isShown && styles.imgArrowUp]}
          />
        </View>
      </Pressable>
      {isShown && (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollHighlights}>
          {circles.map((item, index) => {
            return <HighlightView index={index} key={index} styles={styles} />;
          })}
        </ScrollView>
      )}
    </View>
  );
}

function HighlightView({ index, styles }) {
  return (
    <View>
      {index === 0 ? (
        <View style={styles.firstHighlight}>
          <Image source={Icons.add} style={styles.imgAdd} />
        </View>
      ) : (
        <View style={styles.otherHighlight} />
      )}
    </View>
  );
}

export function Profile(): JSX.Element {
  const { styles } = useStyle(style);

  const circles = Array.apply(null, Array(10)).map(function (y, i) {
    return i;
  });

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <ProfileBody
          name="Bacancy"
          accountName="bacancy"
          bio="Bacancy private limited"
          profileImage={Icons.user_1}
          followers="3.6M"
          following="35"
          posts="458"
          styles={styles}
        />
        <ProfileButtons
          id={0}
          name="Bacancy"
          accountName="bacancy"
          profileImage={Icons.user_1}
          styles={styles}
        />
      </View>
      <StoryHighlights circles={circles} styles={styles} />
      <ProfileTabNavigator />
    </ScrollView>
  );
}
