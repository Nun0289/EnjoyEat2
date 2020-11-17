import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HeadCarousel } from "../component/HeadeCarousel";
import componentStyle from "../style/componentstyle";
import homeStyle from "../style/homestyle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SpacialCard from "../component/SpacialCard";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const images = [
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
];
const promotionData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const Home = () => {
  return (
    <View style={componentStyle.container}>
      <FlatList
        data={promotionData}
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
              <SpacialCard />
            </View>
            <View style={{ paddingBottom: 10, paddingTop: 10 }}>
              <Text style={{ fontSize: 23 }}>Feed</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={{ paddingTop: 20 }}>
            <View
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                height: windowHeight / 3,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: "100%",
                  backgroundColor: "blue",
                  height: windowHeight / 4.5,
                  position: "absolute",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  top: 0,
                }}
              ></View>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "red",
                  height: windowHeight / 8,
                  position: "absolute",
                  bottom: 0,
                }}
              ></View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default Home;
