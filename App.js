import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const App = () => {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0)
  };

  const gameOVerHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
    setUserNumber(null);
  };

  let content = <StartScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOVerHandler} />
  }

  else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
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