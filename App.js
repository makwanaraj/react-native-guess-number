import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";

const App = () => {

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartScreen onStartGame={startGameHandler} />

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess Number" />
      {content}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})