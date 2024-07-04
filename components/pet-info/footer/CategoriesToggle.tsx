import React, { useId, useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

import { AnimatedView, TouchableOpacityBox, Text, Box } from "../../index";

import theme from "@/constants/restyleTheme";

const buttons = [
  { label: "Weight" },
  { label: "Body Condition" },
  { label: "Vet Visits" },
];

const CategoriesToggle = () => {
  const { width } = useWindowDimensions();
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleValue = useSharedValue(1);

  const handleToggle = (index: number) => {
    setIsAnimating(true); // multiple press handler
    toggleValue.value = index;
  };

  const knobStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(
          toggleValue.value * ((width - theme.spacing.L) * 0.32),
          {},
          () => {
            runOnJS(setIsAnimating)(false);
          }
        ),
      },
    ],
  }));

  const id = useId();

  return (
    <Box style={styles.switchContainer} mt="L">
      <Box
        flexDirection="row"
        position="absolute"
        justifyContent="space-around"
        flex={1}
        width="100%"
        opacity={0.5}
      >
        {buttons.map((b, i) => (
          <TouchableOpacityBox
            key={`${id}-${i}`}
            flex={1}
            disabled={isAnimating}
            onPress={() => {
              handleToggle(i);
            }}
          >
            <Text textAlign="center">{b.label}</Text>
          </TouchableOpacityBox>
        ))}
      </Box>
      <AnimatedView
        backgroundColor="white"
        height={38}
        width={"33%"}
        borderRadius={4}
        zIndex={1}
        alignItems="center"
        justifyContent="center"
        style={[knobStyle, { ...theme.shadows["lg"] }]}
      >
        <Text fontWeight="bold">{buttons[toggleValue.value].label}</Text>
      </AnimatedView>
    </Box>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 4,
    width: "100%",
    height: 36,
    padding: 2,
  },
});

export default CategoriesToggle;
