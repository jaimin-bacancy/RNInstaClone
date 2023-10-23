import { Icons } from '@/assets';
import { useStyle } from '@/hooks';
import { NotesResponse } from '@/models';
import { strings } from '@/translations';
import React, { useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import { SoundWaveItem } from '../SoundWaveItem/SoundWaveItem';
import style from './NotesItem.styles';

type NotesItemPropTypes = {
  item: NotesResponse;
  isCurrentUser?: boolean;
};

type MusicComponentPropTypes = {
  title: string;
  artist: string;
  styles: any;
};

type NoteComponentPropTypes = {
  note: string;
  styles: any;
};

type AddNoteComponentPropTypes = {
  styles: any;
};

function MusicComponent({ title, artist, styles }: MusicComponentPropTypes) {
  return (
    <View>
      <View style={styles.viewTitle}>
        <SoundWaveItem height={8} width={2} />
        <Text style={styles.textMediaTitle} numberOfLines={1}>
          {title ?? ''}
        </Text>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.textMediaArtist} numberOfLines={1}>
          {artist ?? ''}
        </Text>
      </View>
    </View>
  );
}

function NoteComponent({ note, styles }: NoteComponentPropTypes) {
  return (
    <View style={styles.viewNote}>
      <Text style={styles.textNote} numberOfLines={2}>
        {note ?? ''}
      </Text>
    </View>
  );
}

function AddNoteComponent({ styles }: AddNoteComponentPropTypes) {
  return (
    <View style={styles.btnAddNote}>
      <Image source={Icons.add_circle} style={styles.imgAddNote} />
    </View>
  );
}

export function NotesItem({
  item,
  isCurrentUser,
}: NotesItemPropTypes): JSX.Element {
  const { styles } = useStyle(style);

  const source = useMemo(() => {
    return typeof item.image === 'string' ? { uri: item.image } : item.image;
  }, [item.image]);

  return (
    <View style={styles.container}>
      <View style={styles.viewUserImage}>
        <Image source={source} style={styles.imgUser} />
      </View>
      <Text style={[styles.textUserName, isCurrentUser && styles.textYourNote]}>
        {isCurrentUser ? strings.yourNote : item.name}
      </Text>
      {item.media || !isCurrentUser ? (
        <View style={styles.mediaContainer}>
          {item.media?.type == 'music' ? (
            // @ts-ignore
            <MusicComponent {...item.media?.data} styles={styles} />
          ) : (
            // @ts-ignore
            <NoteComponent {...item.media?.data} styles={styles} />
          )}
        </View>
      ) : (
        <AddNoteComponent styles={styles} />
      )}
    </View>
  );
}
