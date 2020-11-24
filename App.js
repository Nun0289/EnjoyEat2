import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Menubar from "./src/component/Menubar";
import SplashScreens from "./src/screen/SplashScreen";
import LoginScreen from "./src/screen/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import axios from "axios";
export default function App() {
  axios.defaults.baseURL =
    "https://b7d23aefdd4c.ngrok.io/njoyeat-4c709/us-central1/api";
  // axios.defaults.headers.common["Authorization"] =
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6IkF5VEZlYlJyZHhoeUN0bkRudTR5Iiwibmlja25hbWUiOiJvcHBhIiwibGFzdE5hbWUiOiJpZGxlIiwiYWdlIjoyMCwiZW1haWwiOiJvcHBhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoib3BwYWlkbGUiLCJmcmllbmQiOltdLCJyYXRpbmciOjAsImZpbGUiOiJodHRwczovL2F2YXRhcnMyLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzQxMzc3NTg2P3M9NDYwJnU9ODk4NzQ0ZWY1MDg5ZDZlYTM0MmM0YzA5ZmE2NzAwYjJkZjE3ZjcxNiZ2PTQiLCJwYXNzd29yZCI6IiQyYiQwOCRBd1N4TFpUc3NLTlZ1QjlBNXJBdXdlZjJEN2hFS2JHM2liQUJxVkhBT2lpQXp6UnRJcldmLiIsImdlbmRlciI6Ik0iLCJkZXNjcmlwdGlvbiI6IuC4reC4seC4meC4ouC4reC4h-C4ruC4suC5guC4ouC5gOC4iyIsImZpcnN0TmFtZSI6Im9wcGEiLCJsb2NhdGlvbiI6eyJsYXQiOjAsImxvbmciOjB9LCJyZXN0RmV2IjpbXX1dLCJpYXQiOjE2MDU3NzEyNTF9.7AkSisJysJOeO4CVmieHpdrVXV4QfLa7dy_JSEbPRXQ";

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreens" component={SplashScreens} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Root = () => <Menubar />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
