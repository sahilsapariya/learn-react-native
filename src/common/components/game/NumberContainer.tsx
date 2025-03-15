import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "constants/colors";

const NumberContainer = ({ children }: { children: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary300,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.secondary300,
    fontSize: 28,
    fontWeight: "bold",
  }
});
