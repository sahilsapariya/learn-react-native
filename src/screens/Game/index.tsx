import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "common/interfaces";

type Props = StackScreenProps<RootStackParamList, "Game">;

const GameScreen: React.FC<Props> = ({ route, navigation }) => {
  const { userNumber } = route.params;

  return (
    <View style={styles.mainContainer}>
      <Text>{userNumber}</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 40,
        marginHorizontal: 20,

    }
});
