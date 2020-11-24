import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Dimensions } from "react-native";
import styles from "../style/splashscreenstyle";
import { CommonActions } from "@react-navigation/native";

const image = {
  uri:
    "https://media.discordapp.net/attachments/741539980488474658/780385127561429012/Artboard_1.png?width=309&height=670",
};

const SplashScreens = ({ navigation }) => {
  useEffect(() => {
    setTimeout(function () {
      navigation.dispatch(
        CommonActions.reset({
          routes: [{ name: "LoginScreen" }],
        })
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
    </View>
  );
};
export default SplashScreens;
