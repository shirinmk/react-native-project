import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

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
      </View>
    </View>
  );
};
export default CarItem;
