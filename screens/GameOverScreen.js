import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over!</Text>
      <Text>Number of Rounds:{props.roundsNumber} </Text>
      <View style={styles.button}>
        <Button title="Start New Game" onPress={props.onRestart} />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    margin: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20
  }
})