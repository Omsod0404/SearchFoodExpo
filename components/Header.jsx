import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>MENU</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ff0534",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginBottom: 20
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 10
  }
});

export default Header;