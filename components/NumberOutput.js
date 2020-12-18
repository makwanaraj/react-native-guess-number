import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from "../config/Colors";

function NumberOutput(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

export default NumberOutput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10
  },
  number: {
    fontSize: 22,
    color: Colors.primary,
  }
})