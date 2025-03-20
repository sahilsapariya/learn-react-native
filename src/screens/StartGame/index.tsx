import { Alert, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "common/components/ui/PrimaryButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "common/interfaces";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import { startGameStyles as styles } from "./style";
import Title from "common/components/ui/Title";

type Props = StackScreenProps<RootStackParamList, "StartGame">;

const StartGameScreen: React.FC<Props> = ({ navigation }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: () => setEnteredNumber(""),
          },
        ]
      );
      return;
    }
    navigation.navigate("Game", { userNumber: chosenNumber });
  };

  return (
    <ScreenWrapper>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text
          style={{
            color: "white",
          }}
        >
          Enter a number
        </Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={(text) => setEnteredNumber(text)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => setEnteredNumber("")}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default StartGameScreen;
