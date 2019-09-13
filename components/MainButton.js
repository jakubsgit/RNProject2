import React from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  TouchableNativeFeedback
} from "react-native";

import Colors from "../constants/colors";

const mainButton = props => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress}>
        <View style={{...styles.button, ...props.styles}}>
          <Text style={styles.buttonText}>
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Dimensions.get("screen").height > 600 ? 10 : 5,
    paddingHorizontal: 20,
    borderRadius: 30
  },
  buttonText: {
    color: "white",
    fontSize: Dimensions.get("screen").height > 600 ? 18 : 14
  },
  buttonContainer: {
    borderRadius: 30,
    overflow: 'hidden',
    margin: 10
  }
});

export default mainButton;
