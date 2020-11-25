import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
const Favorite = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      const fav = await axios.get("user/get/fev");
      setData(fav.data);
      console.log("ss");
      console.log(fav.data);
      return fav;
    };
    fetchDate();
  }, []);

  // console.log(data);

  return (
   <View>
     <Text>{data.id}</Text>
   </View>
  );
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
