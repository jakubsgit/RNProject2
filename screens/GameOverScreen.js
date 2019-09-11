import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";

const gameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card>
        <Text style={styles.text}>
          Koniec gry! Jeah! Udało mi się odgadnąć Twoją liczbę po{" "}
          {props.roundsNumber} próbach!
        </Text>
        <Button title="Zagrajmy jeszcze raz!" onPress={props.onRestart} />
      </Card>
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
    textAlign: "center"
  }
});

export default gameOverScreen;
