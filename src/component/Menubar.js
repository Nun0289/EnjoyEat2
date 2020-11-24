import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Home from "../screen/Home";
import Favorite from "../screen/Favorite";
import Account from "../screen/Account";
import Friends from "../screen/Friends";
import Chat from "../screen/Chat";
import Rate from "../screen/Rate";
import Detail from "../screen/Detail";
import Rateuser from "../screen/Rateuser";
import { useFonts, Prompt_300Light } from "@expo-google-fonts/prompt";
import { AppLoading } from "expo";

const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const AccountStack = createStackNavigator();
const FriendsStack = createStackNavigator();
const ChatStack = createStackNavigator();
const DetailStack = createStackNavigator();
const RateuserStack = createStackNavigator();
const SearchIcon = ({ navigate, from }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(from, { from: from });
      }}
    >
      <FontAwesome5
        name="search"
        size={30}
        style={{ marginRight: 20, color: "#FFF" }}
      />
    </TouchableOpacity>
  );
};
const BackIcon = ({ goBack, from }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        borderRadius: 5000,
        backgroundColor: "rgba(75, 75,75, 0.6)",
        width: 35,
        height: 35,
        marginLeft: 15,
      }}
      onPress={() => goBack(from)}
    >
      <View>
        <SimpleLineIcons
          name="arrow-left"
          size={28}
          style={{ textAlign: "center", color: "#FFF", marginLeft: "5%" }}
        />
      </View>
    </TouchableOpacity>
  );
};

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          animationEnabled: false,
          headerBackTitleVisible: false,
          animationEnabled: false,
          headerTitleStyle: { fontFamily: "Prompt_300Light" },
          title: "",
          headerStyle: {
            backgroundColor: "#FDD009",
          },
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={{
          animationEnabled: false,
          headerBackTitleVisible: false,
          animationEnabled: false,
          headerTitleStyle: { fontFamily: "Prompt_300Light" },
          title: "",
          headerStyle: {
            backgroundColor: "#FDD009",
          },
        }}
      />
      <HomeStack.Screen
        name="Rate"
        component={Rate}
        options={{
          animationEnabled: false,
          headerBackTitleVisible: false,
          animationEnabled: false,
          headerTitleStyle: { fontFamily: "Prompt_300Light" },
          title: "",
          headerStyle: {
            backgroundColor: "#FDD009",
          },
        }}
      />
      <HomeStack.Screen
        name="Rateuser"
        component={Rateuser}
        options={{
          animationEnabled: false,
          headerBackTitleVisible: false,
          animationEnabled: false,
          headerTitleStyle: { fontFamily: "Prompt_300Light" },
          title: "",
          headerStyle: {
            backgroundColor: "#FDD009",
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
const FavoriteStackScreen = ({ navigation }) => {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen
        name="Favorite"
        component={Favorite}
        options={{
          animationEnabled: false,
          headerBackTitleVisible: false,
          animationEnabled: false,
          headerTitleStyle: { fontFamily: "Prompt_300Light" },
          title: "",
          headerStyle: {
            backgroundColor: "#FDD009",
          },
        }}
      />
    </FavoriteStack.Navigator>
  );
};
const AccountStackScreen = ({ navigation }) => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={Account}
        options={{
          animationEnabled: false,
          headerBackTitleVisible: false,
          animationEnabled: false,
          headerTitleStyle: { fontFamily: "Prompt_300Light" },
          title: "",
          headerStyle: {
            backgroundColor: "#FDD009",
          },
        }}
      />
    </AccountStack.Navigator>
  );
};
const FriendsStackScreen = ({ navigation }) => {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen
        name="Friends"
        component={Friends}
        options={{
          animationEnabled: false,
          headerBackTitleVisible: false,
          animationEnabled: false,
          headerTitleStyle: { fontFamily: "Prompt_300Light" },
          title: "",
          headerStyle: {
            backgroundColor: "#FDD009",
          },
        }}
      />
    </FriendsStack.Navigator>
  );
};
const ChatStackScreen = ({ navigation }) => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chat"
        component={Chat}
        options={{
          animationEnabled: false,
          headerBackTitleVisible: false,
          animationEnabled: false,
          headerTitleStyle: { fontFamily: "Prompt_300Light" },
          title: "",
          headerStyle: {
            backgroundColor: "#FDD009",
          },
        }}
      />
    </ChatStack.Navigator>
  );
};

const Tab = createMaterialTopTabNavigator();

const Menubar = () => {
  let [fontsLoaded, error] = useFonts({ Prompt_300Light });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#FDD009",
        inactiveTintColor: "#A9A9A9",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "#FFF" },
        showIcon: true,
      }}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        name="Favorite"
        component={FavoriteStackScreen}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="heart" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Menubar;
