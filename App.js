import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carlist from "./assets/components/PhoneList";
import Header from "./assets/components/Header";



export default function App() {
  return (
    <View style={styles.container}>
      <Carlist></Carlist>
      <Header></Header>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
