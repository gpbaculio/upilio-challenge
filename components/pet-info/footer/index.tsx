import React from "react";
import { Box, Text } from "../../index";
import WeightToggle from "./WeightToggle";
import CategoriesToggle from "./CategoriesToggle";
import Test from "./Test";

const index = () => {
  return (
    <Box py="XL" flex={1}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontWeight="bold" fontSize={21}>
          Health Progress
        </Text>
        <WeightToggle />
      </Box>
      <CategoriesToggle />
    </Box>
  );
};

export default index;
