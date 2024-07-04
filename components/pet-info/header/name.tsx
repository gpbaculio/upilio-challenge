import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, Text } from "../../index";

type NameProps = {
  name: string;
  gender: "male" | "female";
};

const Name = ({ name, gender }: NameProps) => {
  return (
    <Box flexDirection="row" alignItems="center" mb="XS">
      <Text fontWeight="bold" fontSize={24} mr="XS">
        {name}
      </Text>
      <Ionicons
        name={gender === "male" ? "male" : "female"}
        size={27}
        color="black"
      />
    </Box>
  );
};

export default Name;
