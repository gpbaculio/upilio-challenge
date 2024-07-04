import React from "react";

import { Box, Text } from "../../index";
import Info from "./info";

const Body = () => {
  return (
    <Box mt="XL">
      <Text fontSize={21} fontWeight={"bold"}>
        This Month - December
      </Text>
      <Box flexDirection="row" justifyContent="space-between" mt="M">
        <Info text="Body weight" icon="barbell" info="2.00 lbs" />
        <Info text="Body condition" icon="heartbeat" info="Emaciated" />
      </Box>
    </Box>
  );
};

export default Body;
