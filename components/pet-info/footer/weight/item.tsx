import React from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Text, Box } from "../../../index";
import theme from "../../../../constants/restyleTheme";

const ItemComponent: React.FC<{ title: string }> = ({ title }) => (
  <Box
    width="98%"
    borderColor="light"
    borderWidth={1}
    alignSelf="center"
    backgroundColor="white"
    p="M"
    borderRadius={4}
    flexDirection="row"
    alignItems="center"
    style={{ ...theme.shadows["sm"] }}
    justifyContent="space-between"
  >
    <Box flexDirection="row" alignItems="center">
      <Box backgroundColor="light" p="XS" borderRadius={4}>
        <FontAwesome name="stethoscope" size={24} color="purple" />
      </Box>
      <Box ml="S">
        <Text fontWeight="600">2.00 lbs</Text>
        <Text opacity={0.6}>11/12/2023</Text>
      </Box>
    </Box>
    <FontAwesome name="trash" size={24} color="red" />
  </Box>
);

export default ItemComponent;
