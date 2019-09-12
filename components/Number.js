import React from "react";

import { View, Text, StyleSheet, Dimensions} from "react-native";

import Colors from "../constants/colors";

const number = props => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.number, ...props.numberFont}}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: Dimensions.get('screen').height > 600 ? 10 : 5,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center"
  },
  number: {
      color: Colors.secondary,
      fontSize: Dimensions.get('screen').height > 600 ? 30 : 17
  }
});

export default number;
