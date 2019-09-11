import React from "react";

import { View, Text, StyleSheet} from "react-native";

const header = props => {
  return (
    <View style={styles.container}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 140,
      paddingTop: 40,
      backgroundColor: '#f728',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerTitle: {
      color: 'black',
      fontSize: 18,
      textTransform: 'uppercase',
    }
    
})

export default header;
