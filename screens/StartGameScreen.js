import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import Number from "../components/Number";
import Colors from "../constants/colors";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmation(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Niepoprawna liczba!",
        "Pamiętaj! Liczba musi mieścić się w przedziale 1-99",
        [
          {
            text: "Dobrze :)",
            style: "destructive",
            onPress: resetInputHandler
          }
        ]
      );
      return;
    } else if (chosenNumber === "" || isNaN(chosenNumber)) {
      Alert.alert(
        "Wpisz liczbę amigo!",
        "Pamiętaj! Liczba musi mieścić się w przedziale 1-99",
        [
          {
            text: "Już wpisuję :)",
            style: "destructive",
            onPress: resetInputHandler
          }
        ]
      );
      return;
    }
    setConfirmation(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmation) {
    confirmedOutput = (
      <Card style={{ width: "70%", backgroundColor: "#C6c6c6" }}>
        <Text style={{ fontSize: 20 }}>Wybrany numer, zapamiętaj go:</Text>
        <Number>{selectedNumber}</Number>
        <Button
          title="BĘDĘ GRAŁ W GRĘ"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Zacznij nową grę!</Text>
        <Card style={styles.inputScreen}>
          <Text>Wybierz dowolny numer</Text>
          <Input
            blurOnSubmit
            autoCorrect={false}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonScreen}>
            <View style={styles.button}>
              <Button
                title="Zacznij od nowa!"
                onPress={resetInputHandler}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Potwierdź"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    width: "100%"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonScreen: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-around"
  },
  inputScreen: {
    padding: 15,
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});

export default StartGameScreen;
