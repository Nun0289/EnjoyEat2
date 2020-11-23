import { StatusBar } from "expo-status-bar";
import React from "react";
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

const LoginScreen = () => {
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
            style={styles.TextInput}
            placeholder="Enter Password Here!!!!"
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
