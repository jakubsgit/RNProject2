import React from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";

import Colors from "../constants/colors";

const mainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={{ ...styles.buttonText, ...props.numberFont }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Dimensions.get("screen").height > 600 ? 12 : 3,
    paddingHorizontal: 30,
    borderRadius: 30
  },
  buttonText: {
    color: "white",
    fontSize: Dimensions.get("screen").height > 600 ? 18 : 14
  }
});

export default mainButton;
