import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import StarRating from "react-native-star-rating";
import { TextInput } from "react-native-gesture-handler";
import { CommonActions } from "@react-navigation/native";
const Rate = ({ navigation, route }) => {
  const [starCount, onStarRatingPress] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ paddingTop: 30 }}>
            <View style={{ paddingBottom: 20, paddingLeft: 20 }}>
              <Text style={{ fontSize: 30 }}>Rate It</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: "80%",
                  height: windowHeight / 3.5,
                  borderWidth: 10,
                  borderRadius: 10,
                  borderColor: "#FFF",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.41,
                  shadowRadius: 9.11,

                  elevation: 14,
                }}
              >
                <Image
                  style={{
                    flex: 1,
                  }}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <View style={{ paddingLeft: 30, paddingTop: 30 }}>
              <Text style={{ fontSize: 20 }}>ชื่อร้านอาหาร</Text>
              <View style={{ paddingTop: 10 }}>
                <Text>ข้อมูลโปรโมชั่น</Text>
              </View>
            </View>
            <View style={{ paddingTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <View style={{ borderRadius: 20 }}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    starSize={50}
                    rating={starCount}
                    starStyle={{ padding: 5 }}
                    fullStarColor={"#000"}
                    selectedStar={(rating) => {
                      onStarRatingPress(rating);
                      console.log(starCount);
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  height: 200,
                  padding: 20,
                }}
              >
                <TextInput
                  placeholder="Comment Here!!!!!"
                  numberOfLines={10}
                  multiline={true}
                  style={{
                    paddingTop: 20,
                    textAlignVertical: "top",
                    width: "100%",
                    backgroundColor: "#FFF",
                    paddingLeft: 20,
                    borderRadius: 20,

                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,

                    elevation: 11,
                  }}
                ></TextInput>
              </View>
            </View>
            <View style={{ paddingTop: 30, paddingBottom: 100 }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  height: 50,
                  paddingLeft: 20,
                  paddingRight: 20,
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
                    flex: 1,
                    backgroundColor: "#FF0000",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#FFF" }}>Cancel</Text>
                </TouchableOpacity>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity
                  onPress={() => navigation.push("Rateuser")}
                  style={{
                    flex: 1,
                    backgroundColor: "#00cc00",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#FFF" }}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});
export default Rate;
