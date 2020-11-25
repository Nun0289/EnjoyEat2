import {
  View,
  Dimensions,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import componentStyle from "../style/componentstyle";
import { TouchableOpacity } from "react-native-gesture-handler";
const windowHeight = Dimensions.get("window").height;
import axios from "axios";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const near = ({ route, navigation }) => {
  const [promotion, setPromotion] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const rest = await axios.get("/promotion");
      setPromotion(rest.data);
      return rest;
    };
    fetchDate();
  }, []);

  return (
    <View style={componentStyle.container}>
      <FlatList
        data={promotion}
        renderItem={({ item }) => (
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.push("Detail", {
                  id: item.id,
                  title: item.restName,
                  rate: item.rating,
                  price: item.data.price,
                  detail: item.data.proDes,
                  image: item.data.proPic,
                })
              }
              style={{
                paddingTop: 30,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
              }}
            >
              <View
                style={{
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  height: windowHeight / 3,
                  borderRadius: 10,
                  borderWidth: 0.5,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: windowHeight / 4.5,
                    position: "absolute",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,

                    top: 0,
                  }}
                >
                  <ImageBackground
                    source={{
                      uri: item.data.proPic,
                    }}
                    style={{
                      flex: 1,
                      borderWidth: 0.3,
                      overflow: "hidden",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      resizeMode: "cover",
                    }}
                  ></ImageBackground>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: windowHeight / 8.8,
                    position: "absolute",
                    bottom: 0,
                    flexDirection: "column",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      borderColor: "#C0C0C0",
                      borderWidth: 0.3,
                      backgroundColor: "#FDD009",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flex: 3,

                        justifyContent: "center",
                        paddingLeft: 10,
                      }}
                    >
                      <Text numberOfLines={1} style={{ fontSize: 16 }}>
                        {item.restName}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 2,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, paddingRight: 5 }}>
                          {item.rating}
                        </Text>
                        <FontAwesome name="star" size={20} />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 2.5,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.3,
                        backgroundColor: "#00CC00",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottomLeftRadius: 20,
                        borderTopLeftRadius: 20,
                      }}
                    >
                      <Text
                        style={{ fontSize: 18, paddingRight: 5, color: "#FFF" }}
                      >
                        {item.data.price} .-
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flex: 2.5,

                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          numberOfLines={2}
                          style={{
                            fontSize: 12,
                            paddingRight: 5,
                            paddingLeft: 5,
                          }}
                        >
                          {item.data.proDes}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default near;
