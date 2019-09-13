import React, { useState, useRef, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  Dimensions,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

const renderListItem = (value, numRounds) => (
  <View key={value} style={styles.listItem}>
    <Text>#{numRounds}</Text>
    <Text style={{ fontSize: 20, color: Colors.secondary }}>{value}</Text>
  </View>
);

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

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
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
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
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
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
  },
  listContainer: {
    flex: 1,
    width: "70%",
    margin: "auto"
  },
  list: {
    alignItems: "center",
    justifyContent: "flex-end"
  },
  listItem: {
    borderColor: "black",
    borderWidth: Dimensions.get("screen").height > 600 ? 2 : 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default GameScreen;
