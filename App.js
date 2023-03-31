import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./component/Caritem";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello There!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // show logo
    // Show title
    // show image bac
    //show button top
    // show button down
    <View style={styles.container}>
      <CarItem
        name={"Model X"}
        tagLine={"order online for"}
        tagLineCTA={"TouchLess Delivery"}
        image={require("./assets/images/Model3.jpeg")}
      />
      {/* <CarItem /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center", // this cause not to cover whole screen it moves to the right
    justifyContent: "center",
  },
});
