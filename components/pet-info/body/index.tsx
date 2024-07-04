import React from "react";

import { Box, Text } from "../../index";
import Info from "./info";

const Body = () => {
  return (
    <Box mt="XL">
      <Text fontSize={21} fontWeight={"bold"}>
        This Month - December
      </Text>
      <Box flexDirection="row" justifyContent="space-between" mt="S">
        <Info />
        <Info />
      </Box>
    </Box>
  );
};

export default Body;
