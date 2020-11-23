import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    justifyContent: "center",
  },
  backlogo: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});
export default styles;
