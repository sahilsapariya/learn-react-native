import React from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <LinearGradient colors={["#ddb52f", "#4e0329"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("assets/images/dices.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 35 : 0,
  },
});
