import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Dimensions } from "react-native";
import { CommonActions } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  const [signPassword, setSignPassword] = useState("");
  const [signUsername, setSignUsername] = useState("");
  const [signEmail, setSignEmail] = useState("");

  const loginHandler = async () => {
    await axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then(async (user) => {
        axios.defaults.headers.common["Authorization"] =
          (await "Bearer ") + user.data.token;
        await AsyncStorage.setItem("token", JSON.stringify(user.data));
        navigation.dispatch(
          CommonActions.reset({
            routes: [{ name: "Root" }],
          })
        );
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const signupHandler = async () => {
    await axios
      .post("/register", {
        firstName: "",
        lastName: "",
        nickname: "",
        email: signEmail,
        username: signUsername,
        password: signPassword,
        description: "",
        phone: "",
        gender: "",
        age: 20,
      })
      .then(async (user) => {
        console.log(user.data);
        setModalVisible(!modalVisible);
        // await AsyncStorage.setItem("user", JSON.stringify(user.data));
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View style={styles.modalView}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FDD009",
                  borderRadius: 20,
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    paddingLeft: 20,
                    paddingTop: 20,
                    color: "#000",
                  }}
                >
                  Sign up
                </Text>
                <View
                  style={(styles.rowlogin, { paddingLeft: 20, paddingTop: 30 })}
                >
                  <Text
                    style={{
                      paddingBottom: 5,
                      fontSize: 15,
                      color: "blue",
                    }}
                  >
                    Username
                  </Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Username Here!!!!"
                    onChangeText={(text) => setSignUsername(text)}
                  ></TextInput>
                </View>

                <View
                  style={(styles.rowlogin, { paddingLeft: 20, paddingTop: 10 })}
                >
                  <Text
                    style={{
                      paddingBottom: 5,
                      paddingTop: 10,
                      fontSize: 15,
                      color: "blue",
                    }}
                  >
                    Password
                  </Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Password Here!!!!"
                    onChangeText={(text) => setSignPassword(text)}
                  ></TextInput>
                </View>
                <View
                  style={(styles.rowlogin, { paddingLeft: 20, paddingTop: 10 })}
                >
                  <Text
                    style={{
                      paddingBottom: 5,
                      paddingTop: 10,
                      fontSize: 15,
                      color: "blue",
                    }}
                  >
                    Re-Password
                  </Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Re-Password Here!!!!"
                  ></TextInput>
                </View>
                <View
                  style={(styles.rowlogin, { paddingLeft: 20, paddingTop: 10 })}
                >
                  <Text
                    style={{
                      paddingBottom: 5,
                      paddingTop: 10,
                      fontSize: 15,
                      color: "blue",
                    }}
                  >
                    Email
                  </Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Email Here!!!!"
                    onChangeText={(text) => setSignEmail(text)}
                  ></TextInput>
                </View>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingTop: 20,
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => signupHandler()}
                      style={{
                        backgroundColor: "blue",
                        height: 50,
                        width: "70%",
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ fontSize: 18, color: "#FFF" }}>
                          Sign Up
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.yellowblock}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              backgroundColor: "#FDD009",
              borderWidth: 10,
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
                borderRadius: 100,
              }}
              source={{
                uri: "https://i.imgur.com/5Lr24UZ.png",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.loginbox}>
        <View style={(styles.rowlogin, { paddingLeft: 20, paddingTop: 30 })}>
          <Text
            style={{
              paddingBottom: 5,
              fontSize: 15,
              color: "blue",
            }}
          >
            Username
          </Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Username Here!!!!"
            onChangeText={(text) => setUsername(text)}
          ></TextInput>
        </View>

        <View style={(styles.rowlogin, { paddingLeft: 20, paddingTop: 10 })}>
          <Text
            style={{
              paddingBottom: 5,
              paddingTop: 10,
              fontSize: 15,
              color: "blue",
            }}
          >
            Password
          </Text>
          <TextInput
            secureTextEntry={true}
            style={styles.TextInput}
            placeholder="Enter Password Here!!!!"
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              paddingTop: 20,
              alignItems: "center",
            }}
          >
            {error ? (
              <Text style={{ fontSize: 14, color: "red", marginBottom: 10 }}>
                username or password incorrect
              </Text>
            ) : null}

            <TouchableOpacity
              // onPress={() =>
              // navigation.dispatch(
              //   CommonActions.reset({
              //     routes: [{ name: "Root" }],
              //   })
              // )
              // }
              style={{
                backgroundColor: "blue",
                height: 50,
                width: "70%",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
              onPress={loginHandler}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "#FFF" }}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text>If You Don't Have Any Account</Text>
          <TouchableOpacity
            style={{ paddingTop: 20 }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={{ fontSize: 16, color: "blue" }}>Sign Up Free </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    borderRadius: 20,
    flexDirection: "column",
    width: "90%",
    height: "75%",
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
export default LoginScreen;
