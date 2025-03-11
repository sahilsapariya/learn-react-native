import { Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "common/interfaces";
import { gameStyles as styles } from "./style";
import ScreenWrapper from "common/wrappers/ScreenWrapper";

type Props = StackScreenProps<RootStackParamList, "Game">;

const GameScreen: React.FC<Props> = ({ route, navigation }) => {
  const { userNumber } = route.params;

  return (
    <ScreenWrapper>
      <View style={styles.mainContainer}>
        <Text>{userNumber}</Text>
      </View>
    </ScreenWrapper>
  );
};

export default GameScreen;
