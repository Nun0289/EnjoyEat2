import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Dimensions } from "react-native";
import styles from "../style/splashscreenstyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";

const image = {
  uri: "https://i.imgur.com/VWRPaey.png",
};

const SplashScreens = ({ navigation }) => {
  useEffect(() => {
    const checkStorage = async () => {
      const user_id = await AsyncStorage.getItem("token");
      console.log("sussec");
      if (user_id) {
        console.log("1c");
        setTimeout(function () {
          navigation.dispatch(
            CommonActions.reset({
              routes: [{ name: "Root" }],
            })
          );
        }, 2500);
      } else {
        console.log("1");
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
