import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const homeStyle = StyleSheet.create({
  menubar: {
    width: "100%",
    height: windowHeight / 6.5,
    justifyContent: "center",
    alignItems: "center",
  },
  centermenubar: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
  centerbutton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default homeStyle;
