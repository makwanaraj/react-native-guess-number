import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberOutput from "../components/NumberOutput";
import Colors from '../config/Colors';

const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    //Validation using regular expression
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  //reset Button functioonality
  const resetButtonHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  //confirm Button functionality
  const confirmButtonHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Enter Number between 1 to 99', [
        { text: 'Ok', style: 'destructive', onPress: resetButtonHandler },
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.outputValue}>
        <Text>Your Value</Text>
        <NumberOutput>{selectedNumber}</NumberOutput>
        <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={{ fontSize: 18 }}> Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.primary}
                onPress={resetButtonHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.secondary}
                onPress={confirmButtonHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  button: {
    width: 100,
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  input: {
    width: 50,
    textAlign: 'center',
  },

  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  outputValue: {
    marginVertical: 20,
    alignItems: 'center'
  },

  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});
