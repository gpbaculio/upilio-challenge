import { Box, Text } from "../../index";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Footer from "./footer";

type infoProps = {
  text: string;
  icon: "barbell" | "heartbeat";
  info: string;
};

const info = ({ text, icon, info }: infoProps) => {
  const isBarbell = icon === "barbell";
  return (
    <Box
      width={"48%"}
      borderRadius={12}
      borderColor="purple"
      borderWidth={1}
      p="S"
    >
      <Box>
        {isBarbell ? (
          <Ionicons
            name="barbell"
            size={24}
            color="purple"
            style={styles.barbell}
          />
        ) : (
          <FontAwesome name="heartbeat" size={24} color="purple" />
        )}
        <Text mt={isBarbell ? "XL" : undefined} pt="XS">
          {text}
        </Text>

        <Footer text={info} />
      </Box>
    </Box>
  );
};

export default info;

const styles = StyleSheet.create({
  barbell: {
    transform: [{ rotate: "45deg" }],
    position: "absolute",
  },
});
