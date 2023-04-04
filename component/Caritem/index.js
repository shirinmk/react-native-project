import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyleButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;

  return (
    <View>
      <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image} />
        {/* Show title */}
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
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
        {/* end of view buttonContainer */}
      </View>
    </View>
  );
};
export default CarItem;
