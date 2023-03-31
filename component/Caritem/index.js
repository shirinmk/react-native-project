import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyleButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagLine, image, tagLineCTA } = props;

  return (
    <View>
      <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image} />
        {/* Show title */}
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagLine} <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
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
