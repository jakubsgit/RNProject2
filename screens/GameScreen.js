import React, { useState, useRef } from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";

import Number from "../components/Number";
import Card from "../components/Card";

import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(max, min, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert(
        "Proszę nie oszukiwać :)",
        "Pamiętaj, trzymamy się matematyki stosowanej :) 1 < 2",
        [{ text: "Wybacz :)", style: "cancel" }]
      );
      return;
    }
    if (direction === 'lower') {
      generateRandomBetween()
    }
  };
  return (
    <View style={styles.screen}>
      <Text>Myślę, ze Twoj numer to:</Text>
      <Number>{currentGuess}</Number>
      <Card style={styles.buttonContainer}>
        <Button
          title="Mniej!"
          onPress={nextGuessHandler.bind(this, "lower")}
          color={Colors.red}
        />
        <Button
          title="Próbuj wyżej!"
          onPress={nextGuessHandler.bind(this, "higher")}
          color={Colors.green}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%"
  }
});

export default GameScreen;
