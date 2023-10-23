import { Icons } from '@/assets';
import { ChatItem, NotesItem, SearchBar } from '@/components';
import { useStyle } from '@/hooks';
import { ChatsData, NotesData } from '@/mocks';
import { ChatResponse, NotesResponse } from '@/models';
import { goBack } from '@/navigators/NavigationRef';
import { strings } from '@/translations';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './Chat.styles';
import useChat from './hooks/useChat';

type NotesItemPropType = {
  item: NotesResponse;
  index: number;
};

type ChatItemPropType = {
  item: ChatResponse;
  index: number;
};

type HeaderViewPropType = {
  styles: any;
};

type NotesPropType = {
  styles: any;
};

type ChatsListPropType = {
  styles: any;
};

function HeaderView({ styles }: HeaderViewPropType) {
  return (
    <View style={styles.viewHeader}>
      <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
        <Image style={styles.imgBack} source={Icons.arrow_left} />
      </TouchableOpacity>
      <View style={styles.viewCallsNewChat}>
        <TouchableOpacity style={styles.btnCalls}>
          <Image style={styles.imgBack} source={Icons.video_call} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNewChat}>
          <Image style={styles.imgBack} source={Icons.edit_square} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Notes({ styles }: NotesPropType) {
  return (
    <View>
      <FlatList
        data={NotesData}
        horizontal
        ListHeaderComponent={
          <NotesItem
            isCurrentUser={true}
            item={{
              image: Icons.user_1,
              name: '',
            }}
          />
        }
        contentContainerStyle={styles.listNotes}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }: NotesItemPropType) => {
          return <NotesItem item={item} key={index} />;
        }}
      />
    </View>
  );
}

function ChatListHeaderComponent({ styles }) {
  return (
    <View style={styles.viewChatListHeader}>
      <Text style={styles.textMessages}>{strings.messages}</Text>
      <Text style={styles.textRequests}>{strings.requests}</Text>
    </View>
  );
}

function ChatsList({ styles }: ChatsListPropType) {
  return (
    <View>
      <FlatList
        data={ChatsData}
        scrollEnabled={false}
        contentContainerStyle={styles.listMessages}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ChatListHeaderComponent styles={styles} />}
        renderItem={({ item, index }: ChatItemPropType) => {
          return <ChatItem item={item} key={index} />;
        }}
      />
    </View>
  );
}

export function Chat(): JSX.Element {
  const { styles } = useStyle(style);
  const { getter, setter } = useChat();
  const { setSearchText } = setter;

  return (
    <View style={[styles.container]}>
      <HeaderView styles={styles} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar onChangeText={setSearchText} {...getter} />
        <Notes styles={styles} />
        <ChatsList styles={styles} />
      </ScrollView>
    </View>
  );
}
