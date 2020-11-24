import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HeadCarousel } from "../component/HeadeCarousel";
import componentStyle from "../style/componentstyle";
import homeStyle from "../style/homestyle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SpacialCard from "../component/SpacialCard";
import Rateuser from "./Rateuser";
import { Dimensions } from "react-native";
import axios from "axios";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Favorite = () => {
  return <View style={componentStyle.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Favorite;
