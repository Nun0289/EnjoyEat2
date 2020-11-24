import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat() {
  
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    setMessages(
    [
      {
        _id: 1,
        text: 'หิวเหมือนกันเลย !!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'yuqi',
          avatar: '',
        },
      },
      {
        _id: 2,
        text: "หิวจังเลยค่ะ",
        createdAt: new Date(),
        user: {
          _id: 3,
          name: "minnie",
          avatar: "",
        },
      },        
    ]
    )
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])


  console.log("- - - - - - - - - - - - - - - - - - - -")
  console.log({messages})
  console.log("- - - - - - - - - - - - - - - - - - - -")

  return (
    <View style={styles.container}>

      <GiftedChat
       messages={messages}
       alignTop={false}
       renderUsernameOnMessage={true}
       onSend={messages => onSend(messages)}
       user={{ _id: 1, name:"nice"}}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
  },
});