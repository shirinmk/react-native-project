import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 25,
    flexDirection: "row", // to see elements in same line
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    zIndex: 100,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain", //in order to see the logo
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
export default styles;
