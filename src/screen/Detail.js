import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Detail = ({ route, navigation }) => {
  const { id, title, rate, price, detail, image } = route.params;
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const room = [
    {
      roomid: "1",
      female: 2,
      male: 1,
      username: "ท่านศาสดา",
      userrate: 4.5,
      roomtittle: "มากินด้วยกันครับ",
      image:
        "data:image/jpeg;base64,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",
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "55%",
          backgroundColor: "#FFF",
          borderRadius: 20,
          flexDirection: "column",
          borderWidth: 0.5,
        }}
      >
        <View
          style={{
            flex: 1.5,
            backgroundColor: "#FFF",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <Image
              style={{
                flex: 1,
                resizeMode: "cover",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
              source={{
                uri: route.params.image,
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              height: "100%",
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text>{route.params.detail}</Text>
          </View>
        </View>
        <View style={{ flex: 0.4 }}>
          <View
            style={{
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                width: "50%",
                height: "100%",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="heart"
                  size={35}
                  style={{
                    color: "red",
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="share"
                  size={35}
                  style={{
                    color: "#000",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <FlatList
        data={room}
        renderItem={({ item }) => (
          <View style={{ paddingTop: 20 }}>
            <View
              style={{
                width: windowWidth - 50,
                height: windowHeight / 8,
                borderRadius: 20,
                backgroundColor: "#FFF",
                borderWidth: 0.5,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: "80%",
                    height: windowHeight / 12,
                    borderRadius: 100,
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      backgroundColor: "red",
                      justifyContent: "center",
                      paddingLeft: 10,
                    }}
                  >
                    <Text style={{ fontSize: 15 }}>{item.username}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ fontSize: 18, paddingRight: 5 }}>
                        {item.userrate}
                      </Text>
                      <FontAwesome name="star" size={25} color="yellow" />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "blue",
                  }}
                ></View>
              </View>
              <View style={{ flex: 0.8, backgroundColor: "green" }}></View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
});
export default Detail;
