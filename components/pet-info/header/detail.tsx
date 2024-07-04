import React from "react";
import { Box, Text } from "../../index";

type DetailProps = {
  children: React.ReactNode;
  text: string;
};

const Detail = ({ children, text }: DetailProps) => (
  <Box flexDirection="row" alignItems="center">
    {children}
    <Text fontSize={17} ml="XS">
      {text}
    </Text>
  </Box>
);

export default Detail;
