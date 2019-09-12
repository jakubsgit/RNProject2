import React from "react";

import { View, Text, StyleSheet, Button, Image } from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";

const gameOverScreen = props => {
  let guessText = "próbie";

  if (props.roundsNumber > 1) {
    guessText = "próbach";
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Koniec gry!</Text>
      <Text style={styles.text}>
        Udało mi się odgadnąć Twoją liczbę po{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> {guessText}!
      </Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={2500}
          source={require("../assets/success.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <MainButton onPress={props.onRestart}>Zagrajmy jeszcze raz!</MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    fontSize: 25,
    color: "orange"
  }
});

export default gameOverScreen;
