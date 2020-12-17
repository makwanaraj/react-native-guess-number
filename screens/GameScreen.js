import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

import NumberOutput from '../components/NumberOutput';
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberOutput>{currentGuess}</NumberOutput>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => { }} />
        <Button title="Higher" onPress={() => { }} />
      </Card>
    </View>
  )
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 30,
    width: 300,
    maxWidth: "80%"
  }
});