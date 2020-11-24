import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CommonActions } from "@react-navigation/native";
import StarRating from "react-native-star-rating";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    Name: "ชื่อผู้ใช้",
    rate: 1,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    Name: "ชื่อผู้ใช้",
    rate: 3,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    Name: "ชื่อผู้ใช้",
    rate: 5,
  },
];

const Rateuser = ({ navigation }) => {
  const [starCount, onStarRatingPress] = useState(0);
  const [addFriends, setAddFriends] = useState(true);
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 60, height: 60, borderRadius: 100 }}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: "column", flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      paddingLeft: 10,
                    }}
                  >
                    <Text>{item.Name}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ flex: 0.5, paddingLeft: 10 }}>
                      <TouchableOpacity
                        onPress={() => {
                          setAddFriends(!addFriends);
                        }}
                      >
                        <FontAwesome5
                          name={`user${addFriends ? "-plus" : "-check"}`}
                          color={"#000"}
                          size={30}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flex: 2,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        starSize={30}
                        rating={starCount}
                        fullStarColor={"#000"}
                        selectedStar={(rating) => {
                          onStarRatingPress(rating);
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View
            style={{
              paddingTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(
                    CommonActions.reset({
                      routes: [{ name: "Home" }],
                    })
                  )
                }
                style={{
                  width: "50%",
                  height: "50%",
                  backgroundColor: "#00cc00",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 8,
                  },
                  shadowOpacity: 0.44,
                  shadowRadius: 10.32,

                  elevation: 16,
                }}
              >
                <Text style={{ fontSize: 20, color: "#FFF" }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginVertical: 8,
    flexDirection: "row",
    marginHorizontal: 30,
    height: 100,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    fontSize: 32,
  },
});

export default Rateuser;
