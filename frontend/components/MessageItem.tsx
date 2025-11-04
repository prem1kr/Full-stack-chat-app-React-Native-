import { StyleSheet,View } from 'react-native';
import React from 'react';
import { MessageProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import { colors, radius, spacingX, spacingY } from '@/constants/theme';
import Avatar from './avatar';
import Typo from './Typo';
import moment from 'moment';

const MessageItem = ({
  item,
  isDirect,
  currentUserId
}: { item: MessageProps, isDirect: boolean, currentUserId: string }) => {
  const isMe = currentUserId === item.sender.id;
  const formattedDate = moment(item.createdAt).isSame(moment(), "day") ? moment(item.createdAt).format("h:mm A") : moment(item.createdAt).format("MMM D, h:mm A");

  // console.log("message item:", item);

  return (
    <View style={[styles.messageContainer, isMe ? styles.myMessage : styles.theirMessage]}>
      {!isMe && isDirect && (
        <Avatar size={30} uri={item.sender.avatar} style={styles.messageAvatar} />
      )}

      <View style={[styles.messageBubble, isMe ? styles.myBubble : styles.theirBubble]}>
        {!isMe && !isDirect && (
          <Typo color={colors.neutral900} fontWeight={"600"} size={13}>
            {item.sender.name}
          </Typo>
        )}
        {item.content && <Typo size={15}>{item.content}</Typo>}
        <Typo style={{ alignSelf: "flex-end" }} size={11} fontWeight={"500"} color={colors.neutral600}>
          {formattedDate}
        </Typo>
      </View>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    gap: spacingX._7,
    maxWidth: '80%',
   marginBottom: spacingY._5,
   marginTop: spacingY._5,


  },
  myMessage: {
    alignSelf: "flex-end"
  },
  theirMessage: {
    alignSelf: 'flex-start',
  },
  messageAvatar: {
    alignSelf: 'flex-end',
  },
  attachement: {
    height: verticalScale(180),
    width: verticalScale(180),
    borderRadius: radius._50,
  },
  messageBubble: {
    padding: spacingX._10,
    borderRadius: radius._15,
    gap: spacingY._5,
  },
  myBubble: {
    backgroundColor: colors.myBubble,
  },
  theirBubble: {
    backgroundColor: colors.otherBubble,
  }
});
