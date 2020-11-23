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
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const loginHandler = async () => {
    await axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then(async (user) => {
        console.log(user.data);
        // setUser(user.data);
        await AsyncStorage.setItem("user", JSON.stringify(user.data));
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  console.log(JSON.stringify(user));

  return (
    <View style={styles.container}>
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
                uri: "https://reactnative.dev/img/tiny_logo.png",
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
          <TouchableHighlight style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 16, color: "blue" }}>Sign Up Free </Text>
          </TouchableHighlight>
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
    height: "50%",
    backgroundColor: "#FDD009",
    position: "absolute",
    top: 0,
    borderRadius: 30,
  },
  loginbox: {
    width: "80%",
    height: "50%",
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
});
export default LoginScreen;
