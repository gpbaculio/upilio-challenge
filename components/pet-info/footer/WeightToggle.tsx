import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

import { AnimatedView, TouchableOpacityBox, Text, Box } from "../../index";
import Test from "./Test";

import theme from "@/constants/restyleTheme";

const ToggleSwitch = () => {
  const [isKg, setIsKg] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleValue = useSharedValue(1);

  const handleToggle = () => {
    setIsAnimating(true); // multiple press handler
    toggleValue.value = toggleValue.value ? 0 : 1;
  };

  const knobStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(toggleValue.value ? 55 : 0, {}, () => {
          runOnJS(setIsKg)(toggleValue.value ? false : true);
          runOnJS(setIsAnimating)(false);
        }),
      },
    ],
  }));

  return (
    <TouchableOpacityBox
      style={styles.switchContainer}
      activeOpacity={1}
      onPress={handleToggle}
      disabled={isAnimating}
    >
      <Box
        flexDirection="row"
        position="absolute"
        justifyContent="space-around"
        flex={1}
        width="100%"
        opacity={0.5}
      >
        <Text>KGs</Text>
        <Text>LBs</Text>
      </Box>
      <AnimatedView
        backgroundColor="white"
        height={38}
        width={65}
        borderRadius={4}
        zIndex={1}
        alignItems="center"
        justifyContent="center"
        style={[knobStyle, { ...theme.shadows["lg"] }]}
      >
        <Text fontWeight="bold">{isKg ? "KGs" : "LBs"}</Text>
      </AnimatedView>
    </TouchableOpacityBox>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 4,
    width: 120,
    height: 36,
    padding: 2,
  },
});

export default ToggleSwitch;
