import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyleButton from "../StyledButton";

const CarItem = () => {
  return (
    <View>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("../../assets/images/Model3.jpeg")}
          style={styles.image}
        />
        {/* Show title */}
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69.000</Text>
        </View>
        <StyleButton
          type="primary"
          content={"custom order"}
          onPress={() => {
            console.warn("cutom order pressed");
          }}
        />

        <StyleButton
          type="secondary"
          content={"Existing inventory"}
          onPress={() => {
            console.warn("Existing inventory pressed");
          }}
        />
      </View>
    </View>
  );
};
export default CarItem;
