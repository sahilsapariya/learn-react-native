import { Alert, Text, View } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "common/interfaces";
import { gameStyles as styles } from "./style";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import Title from "common/components/ui/Title";
import NumberContainer from "common/components/game/NumberContainer";
import PrimaryButton from "common/components/ui/PrimaryButton";

type Props = StackScreenProps<RootStackParamList, "Game">;
type Direction = "LOWER" | "HIGHER";

const generateNextNumber = (min: number, max: number) => {
  return Math.floor((min + max) / 2);
};

const GameScreen: React.FC<Props> = ({ route, navigation }) => {
  const { userNumber } = route.params;
  const minRef = useRef(1);
  const maxRef = useRef(100);
  const [currentGuess, setCurrentGuess] = useState(generateNextNumber(1, 100));
  const [rounds, setRounds] = useState(1);

  useEffect(() => {
    if (currentGuess === userNumber) {
      navigation.navigate("GameOver", { rounds, userNumber });
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction: Direction) => {
    if (
      (direction === "LOWER" && currentGuess < userNumber) ||
      (direction === "HIGHER" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "LOWER") {
      maxRef.current = currentGuess - 1;
    } else {
      minRef.current = currentGuess + 1;
    }

    const nextNumber = generateNextNumber(minRef.current, maxRef.current);
    setCurrentGuess(nextNumber);
    setRounds((prev) => prev + 1);
  };

  return (
    <ScreenWrapper>
      <View style={styles.mainContainer}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text>Higher or Lower?</Text>
          <View>
            <PrimaryButton onPress={() => nextGuessHandler("HIGHER")}>
              +
            </PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler("LOWER")}>
              -
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default GameScreen;
