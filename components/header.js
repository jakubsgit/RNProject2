import React from "react";

import { View, Text, StyleSheet, Platform } from "react-native";

const header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 100,
    paddingTop: 40,
    backgroundColor: "#f728",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    shadowOffset: { height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.3
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    textTransform: "uppercase"
  },
  headerIOS: {
    backgroundColor: "#C8C8C8"
  },
  headerAndroid: {
    borderWidth: 1,
    borderBottomColor: "black",
    elevation: 2
  }
});

export default header;
