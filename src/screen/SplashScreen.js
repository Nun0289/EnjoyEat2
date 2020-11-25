import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Dimensions } from "react-native";
import styles from "../style/splashscreenstyle";
import { CommonActions } from "@react-navigation/native";

const image = {
  uri:"https://i.imgur.com/VWRPaey.png"
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
