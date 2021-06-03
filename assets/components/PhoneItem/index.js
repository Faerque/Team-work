import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  
  const {name, tagline, image, taglineCTA} = props.phone;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitles}>{tagline} <br /><Text>{taglineCTA}</Text></Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Specification"}
          onPress={() => {
            console.warn("Specification Press");
          }}
        />

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
