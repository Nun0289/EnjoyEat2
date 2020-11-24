import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HeadCarousel } from "../component/HeadeCarousel";
import componentStyle from "../style/componentstyle";
import homeStyle from "../style/homestyle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SpacialCard from "../component/SpacialCard";
import Rateuser from "./Rateuser";
import { Dimensions } from "react-native";
import axios from "axios";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const images = [
  "https://www.2u.in.th/wp-content/uploads/2020/02/Promotion-the-pizza-company-buy-1-free-1-for-2020-1024x680-1.jpg",
  "https://yayoirestaurants.com/mainbanners/9377_Desktop-1920x803px.jpg",
  "data:image/jpeg;base64,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",
];
const promotionData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Pizza Company",
    rate: 4.9,
    price: 399,
    favorite: false,
    detail:
      "ได้เวลากินอยู่ดีกันอีกแล้ว!!!….อภิมหาโปรโมชั่นสุดคุ้ม แห่งปี 2020 จัดหนัก จัดเต็มไม่มีกั๊ก! โปรโมชั่น The Pizza Company ซื้อพิซซ่า 1 ถาด แถม 1 ถาด จัดเต็ม! เครื่องแน่น ชีสล้น ทุกหน้า ทุกขอบ ทุกช่องทาง!!! (ทั้งนั่งทานที่ร้าน และ ส่งถึงบ้าน)",
    people: 22,
    image:
      "https://www.2u.in.th/wp-content/uploads/2020/02/Promotion-the-pizza-company-buy-1-free-1-for-2020-1024x680-1.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Yayoi",
    rate: 2.5,
    price: 129,
    favorite: true,
    detail:
      "ยาโยอิจัดให้คุ้มสะใจกับ “ดงบุริ XL”  เอาใจสายกินจุและกินดุ กับเมนูคุ้มจัดเต็ม ไซด์ใหญ่เว่อร์ อร่อยยกเซ็ตพร้อมซุปมิโสะ จัดเต็มได้ทั้ง 5 เมนู เริ่มต้นเพียงเซ็ตละ 129.-",
    people: 18,
    image:
      "https://yayoirestaurants.com/mainbanners/9377_Desktop-1920x803px.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "KFC",
    rate: 2.0,
    price: 139,
    favorite: false,
    detail:
      "ใครหลายใจ อยากได้หลายเมนูต้องลอง กับ KFC The Box ได้ครบจบในกล่องเดียว 139 บาทเท่านั้น เหมาะมว๊ากๆ อย่างงี้ต้องเอาให้อยู่มัด กล่องเดียวเอาอยู่..จบ ได้ครบทุกเมนูจริงๆ น่ะจะบอกให้ 4 แบบ 4 สไตล์",
    people: 12,
    image:
      "data:image/jpeg;base64,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",
  },
];

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      const rest = await axios.get("/promotion");
      setData(rest.data);
      return rest;
    };
    fetchDate();
  }, []);
  return (
    <View style={componentStyle.container}>
      <FlatList
        data={data}
        ListHeaderComponent={
          <View>
            <View style={{ paddingBottom: 10 }}>
              <HeadCarousel images={images} />
            </View>
            <View style={homeStyle.menubar}>
              <View style={homeStyle.centermenubar}>
                <View style={homeStyle.centerbutton}>
                  <TouchableOpacity>
                    <View style={homeStyle.button}>
                      <View
                        style={{
                          justifyContent: "center",
                          flex: 1,
                          alignItems: "center",
                        }}
                      >
                        <FontAwesome5
                          name="map-marker-alt"
                          color={"#000"}
                          size={30}
                        />
                        <Text>NearMe</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={homeStyle.centerbutton}>
                  <TouchableOpacity>
                    <View style={homeStyle.button}>
                      <View
                        style={{
                          justifyContent: "center",
                          flex: 1,
                          alignItems: "center",
                        }}
                      >
                        <FontAwesome5 name="heart" color={"#000"} size={30} />
                        <Text>Favorite</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={homeStyle.centerbutton}>
                  <TouchableOpacity>
                    <View style={homeStyle.button}>
                      <View
                        style={{
                          justifyContent: "center",
                          flex: 1,
                          alignItems: "center",
                        }}
                      >
                        <FontAwesome5
                          name="user-friends"
                          color={"#000"}
                          size={30}
                        />
                        <Text>Friends</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <Text style={{ fontSize: 23 }}>Spacial For You</Text>
              <SpacialCard data={data} />
            </View>
            <View style={{ paddingBottom: 10, paddingTop: 10 }}>
              <Text style={{ fontSize: 23 }}>Feed</Text>
            </View>
          </View>
        }
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
                  >
                    {/* <FontAwesome
                      name={`heart${item.favorite ? "" : "-o"}`}
                      size={30}
                      style={{
                        marginTop: 10,
                        marginRight: 20,
                        color: "red",
                        position: "absolute",
                        right: 0,
                      }}
                    /> */}
                  </ImageBackground>
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
                    {/* <View
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
                        <View
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          <Text style={{ fontSize: 18, paddingRight: 5 }}>
                            {item.people}
                          </Text>
                          <FontAwesome name="user" size={25} />
                        </View>
                      </View>
                    </View> */}
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
export default Home;
