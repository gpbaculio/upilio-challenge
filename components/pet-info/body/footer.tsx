import React from "react";

import { Box, Text } from "../../index";

type FooterProps = {
  text: string;
};

const Footer = ({ text }: FooterProps) => {
  return (
    <Box mt="M">
      <Text textAlign="right" fontSize={18} color="purple">
        {text}
      </Text>
    </Box>
  );
};

export default Footer;
