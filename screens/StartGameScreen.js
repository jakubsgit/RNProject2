import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import Number from "../components/Number";
import MainButton from "../components/MainButton";
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
      <Card
        style={{
          width: "70%",
          backgroundColor: "#C6c6c6",
          height: Dimensions.get("screen").height > 600 ? null : "40%"
        }}
      >
        <Text
          style={{ fontSize: Dimensions.get("screen").height > 600 ? 20 : 15 }}
        >
          Wybrany numer, zapamiętaj go:
        </Text>
        <Number>{selectedNumber}</Number>
        <MainButton
          fontSize={{
            fontSize: Dimensions.get("screen").height > 600 ? 15 : null
          }}
          onPress={() => props.onStartGame(selectedNumber)}
        >
          BĘDĘ GRAŁ W GRĘ
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50}>
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
                <View>
                  <MainButton onPress={resetInputHandler} style={styles.button} styles={styles.button1}>
                    Zacznij od nowa!
                  </MainButton>
                </View>
                <View>
                  <MainButton
                    onPress={confirmInputHandler}
                    style={styles.button}
                    styles={styles.button2}
                  >
                    Potwierdź
                  </MainButton>
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    width: "100%",
    height: Platform.OS === "ios" ? "90%" : "100%"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonScreen: {
    flexDirection: "row",
    width: "90%",
    maxWidth: "95%",
    minWidth: 250,
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10
  },
  inputScreen: {
    padding: 15,
    flexDirection: "column",
    alignItems: "center",
    margin: 20
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  button1: {
    backgroundColor: Colors.red
  },
  button2: {
    backgroundColor: Colors.green
  }
});

export default StartGameScreen;
