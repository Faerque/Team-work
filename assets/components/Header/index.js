import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logo}
      />
      <Image
        style={styles.menu}
        source={menu}
      />
    </View>
  );
};

export default Header;
