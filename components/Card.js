import React from "react";

import { View, StyleSheet, Image } from "react-native";

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    backgroundColor: "white",
    elevation: 9,
    borderBottomEndRadius: 20
  }
});

export default Card;
