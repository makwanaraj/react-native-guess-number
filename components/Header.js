import React from 'react';
import { View, Text, StyleSheet } from "react-native";

import Colors from "../config/Colors";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: Colors.header,
    alignItems: "center",
    justifyContent: "center"
  },

  headerTitle: {
    fontSize: 30,
    color: "#fff"
  }
})