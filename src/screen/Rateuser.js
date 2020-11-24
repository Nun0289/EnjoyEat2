import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Dimensions } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CommonActions } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import StarRating from "react-native-star-rating";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#D989FF", "#687FFE", "#21D4FD"]}
              style={styles.modalView}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    borderColor: "#FFF",
                    borderWidth: 10,
                    position: "absolute",
                    top: -70,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 7,
                    },
                    shadowOpacity: 0.43,
                    shadowRadius: 9.51,

                    elevation: 15,
                  }}
                >
                  <Image
                    style={{ flex: 1, borderRadius: 100 }}
                    source={{
                      uri: "https://reactnative.dev/img/tiny_logo.png",
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <View style={{ paddingTop: 100, flexDirection: "row" }}>
                    <Text style={{ fontSize: 30, color: "#FFF" }}>User1</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingRight: 200,
                    }}
                  >
                    <Text style={{ fontSize: 18, paddingRight: 5 }}>4.5</Text>
                    <FontAwesome name="star" size={25} color="yellow" />
                    <View
                      style={{
                        flexDirection: "row",
                        position: "absolute",
                        right: 10,
                      }}
                    >
                      <FontAwesome name="user" size={25} color="yellow" />
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 20,
                      width: "80%",
                      height: "100%",
                      borderRadius: 20,
                      backgroundColor: "#FFF",
                      padding: 20,
                    }}
                  >
                    <Text style={{ paddingBottom: 20 }}>Name:</Text>
                    <Text style={{ paddingBottom: 20 }}>Address:</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </Modal>
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
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 100 }}
                    source={{
                      uri: "https://reactnative.dev/img/tiny_logo.png",
                    }}
                  />
                </TouchableOpacity>
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

  yellowblock: {
    width: "100%",
    height: windowHeight / 2,
    backgroundColor: "#FDD009",
    position: "absolute",
    top: 0,
    borderRadius: 30,
  },
  loginbox: {
    width: "80%",
    height: windowHeight / 2,
    backgroundColor: "#FFF",
    borderRadius: 20,
    position: "absolute",
    flexDirection: "column",
    bottom: "12%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  rowlogin: {
    flex: 1,
    paddingTop: 20,
  },
  TextInput: {
    height: 40,
    width: "90%",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#F5F5F5",
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  modalView: {
    backgroundColor: "#EFF1FC",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "column",
    width: "90%",
    height: "65%",
    position: "absolute",
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
  },
});

export default Rateuser;
