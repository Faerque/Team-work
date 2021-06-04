import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {

  const { name, tagline, image, taglineCTA } = props.phone;

  return (
    // cart container
    <View style={styles.carContainer}>
      {/* background images */}
      <ImageBackground
        source={image}
        style={styles.image}
      />
      {/* titles */}
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitles}>{tagline} {taglineCTA}</Text>
      </View>
      {/* custom primary buttons */}
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Specification"}
          onPress={() => {
            console.warn("Specification Press");
          }}
        />

        {/* custom secondary buttons */}
        <StyledButton
          type="secondary"
          content={"Order Now"}
          onPress={() => {
            console.warn("Order Now Press");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
