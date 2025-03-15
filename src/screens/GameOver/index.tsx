import { Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "common/interfaces";
import ScreenWrapper from "common/wrappers/ScreenWrapper";

type Props = StackScreenProps<RootStackParamList, "GameOver">;

const GameOverScreen: React.FC<Props> = ({ route }) => {
  const { rounds, userNumber } = route.params;

  return (
    <ScreenWrapper>
      <View>
        <Text>GameOver</Text>
        <Text>Number of rounds: {rounds}</Text>
        <Text>Number was: {userNumber}</Text>
      </View>
    </ScreenWrapper>
  );
};

export default GameOverScreen;
