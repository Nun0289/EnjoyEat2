import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Dimensions } from "react-native";
import styles from "../style/splashscreenstyle";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const image = {
  uri: "https://i.imgur.com/VWRPaey.png",
};

const SplashScreens = ({ navigation }) => {
  useEffect(() => {
    const checkStorage = async () => {
      const user_id = await AsyncStorage.getItem("user");
      if (user_id) {
        setTimeout(function () {
          navigation.dispatch(
            CommonActions.reset({
              routes: [{ name: "Root" }],
            })
          );
        }, 2500);
      } else {
        setTimeout(function () {
          navigation.dispatch(
            CommonActions.reset({
              routes: [{ name: "LoginScreen" }],
            })
          );
        }, 2500);
      }
    };
    checkStorage();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
    </View>
  );
};
export default SplashScreens;
