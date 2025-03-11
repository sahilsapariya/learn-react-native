import { StyleSheet, View, TextInput, Button, Modal, Image, Text } from "react-native";
import React, { useState } from "react";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
