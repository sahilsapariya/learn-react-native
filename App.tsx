import React from "react";
import StartGameScreen from "screens/StartGame";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GameScreen from "screens/Game";
import { RootStackParamList } from "common/interfaces";
import GameOverScreen from "screens/GameOver";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartGame" component={StartGameScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="GameOver" component={GameOverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
