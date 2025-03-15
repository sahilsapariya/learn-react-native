import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "constants/colors";

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.primary600,
    padding: 10,
    textAlign: "center",
    color: Colors.primary600,
    fontWeight: "bold",
  },
});
