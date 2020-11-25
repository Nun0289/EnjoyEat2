import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import * as firebase from "firebase";
import "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBpwoaj8tjQQFTeHQ-T2m_4fIdP115FEI",
  authDomain: "njoyeat-4c709.firebaseapp.com",
  databaseURL: "https://njoyeat-4c709.firebaseio.com",
  projectId: "njoyeat-4c709",
  storageBucket: "njoyeat-4c709.appspot.com",
  messagingSenderId: "339933544929",
  appId: "1:339933544929:web:cc0bb63c42f95379aa12a0",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const chatsRef = db.collection("chats");

export default function Chat({ navigation }) {
  const [user, setUser] = useState(user);
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    readUser();
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === "added")
        .map(({ doc }) => {
          const message = doc.data();
          //createdAt is firebase.firestore.Timestamp instance
          //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
          return {
            ...message,
            createdAt: message.createdAt.toDate(),
          };
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messagesFirestore);
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  async function readUser() {
    let user = await AsyncStorage.getItem("user");
    user = await JSON.parse(user);
    if (user) {
      await setUser(user.user[0].nickname);
    }
  }

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  async function handleSend(messages) {
    console.log(messages);
    const writes = messages.map((m) => chatsRef.add(m));
    await Promise.all(writes);
  }

  // console.log("- - - - - - - - - - - - - - - - - - - -");
  // console.log({ messages });
  // console.log("- - - - - - - - - - - - - - - - - - - -");

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        user={{ name: user }}
        onSend={handleSend}
      />
      {/* <GiftedChat
        messages={messages}
        alignTop={false}
        renderUsernameOnMessage={true}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1, name: "nice" }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
