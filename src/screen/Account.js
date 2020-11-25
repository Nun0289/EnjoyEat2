import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import axios from "axios";
import { Dimensions } from "react-native";
import { CommonActions } from "@react-navigation/native";
const Account = ({ navigation }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      const pro = await axios.get("user/profile");
      setData(pro.data);
      setImage(pro.data.file);
      return pro;

      console.log({ data });
      console.log({ image });
    };
    fetchDate();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    // <ScrollView>
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          height: 550,
          backgroundColor: "#FFF",
          borderRadius: 20,
          marginTop: 150,
          alignItems: "center",
          flexDirection: "column",
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
            top: -120,
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
            source={{ uri: image }}
          />
        </View>
        <View style={{ width: "100%", height: 50 }}>
          <View style={{ position: "absolute", right: 20 }}>
            <TouchableOpacity onPress={pickImage}>
              <FontAwesome5 name="camera" size={50} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <Text style={{ fontSize: 15 }}>ชื่อ</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="ชื่อ"
              style={{
                width: "90%",
                height: "80%",
                backgroundColor: "#F5F5F5",
                paddingLeft: 10,
                borderRadius: 5,
              }}
            >
              {data.firstName}
            </TextInput>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <Text style={{ fontSize: 15 }}>นามสกุล</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="นามสกุล"
              style={{
                width: "90%",
                height: "80%",
                backgroundColor: "#F5F5F5",
                paddingLeft: 10,
                borderRadius: 5,
              }}
            >
              {data.lastName}
            </TextInput>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <Text style={{ fontSize: 15 }}>ชื่อเล่น</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="ชื่อเล่น"
              style={{
                width: "90%",
                height: "80%",
                backgroundColor: "#F5F5F5",
                paddingLeft: 10,
                borderRadius: 5,
              }}
            >
              {data.nickname}{" "}
            </TextInput>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 100,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <Text style={{ fontSize: 15 }}>รายละเอียด</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <TextInput
              multiline
              numberOfLines={10}
              placeholder="รายละเอียด"
              style={{
                paddingTop: 10,
                textAlignVertical: "top",
                width: "90%",
                height: "80%",
                backgroundColor: "#F5F5F5",
                paddingLeft: 10,
                borderRadius: 5,
              }}
            >
              {data.description}
            </TextInput>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <Text style={{ fontSize: 15 }}>เบอร์โทรศัพท์</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="เบอร์โทรศัพท์"
              style={{
                width: "90%",
                height: "80%",
                backgroundColor: "#F5F5F5",
                paddingLeft: 10,
                borderRadius: 5,
              }}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <Text style={{ fontSize: 15 }}>อีเมล</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="อีเมล"
              style={{
                width: "90%",
                height: "80%",
                backgroundColor: "#F5F5F5",
                paddingLeft: 10,
                borderRadius: 5,
              }}
            >
              {data.email}
            </TextInput>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
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
            <Text style={{ color: "#FFF", fontSize: 20 }}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.removeItem("token");
              navigation.dispatch(
                CommonActions.reset({
                  routes: [{ name: "LoginScreen" }],
                })
              );
            }}
            style={{
              width: 150,
              height: 50,
              backgroundColor: "red",
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
            <Text style={{ color: "#FFF", fontSize: 20 }}>logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21319B",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Account;
