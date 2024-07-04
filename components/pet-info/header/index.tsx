import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import ExpoImage from "../../ExpoImage";
import { Box, Text, TouchableOpacityBox } from "../../index";

import Detail from "./detail";
import Name from "./name";

const guineaPig = require("@/assets/images/guinea-pig.png");

const Header = () => (
  <Box flexDirection="row">
    <ExpoImage
      borderRadius={100}
      source={guineaPig}
      width={100}
      height={100}
      shadow="sm"
    />
    <Box flex={1} ml="L">
      <Name name="Something" gender="male" />
      <Detail text="2011-06-25">
        <FontAwesome name="birthday-cake" size={17} color="brown" />
      </Detail>
      <Detail text="3 years and 2 days">
        <FontAwesome name="calendar" size={17} color="brown" />
      </Detail>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Detail text="2.00 lbs">
          <Ionicons name="scale" size={17} color="brown" />
        </Detail>
        <TouchableOpacityBox flexDirection="row" alignItems="center">
          <FontAwesome name="edit" size={17} color="purple" />
          <Text fontSize={17} ml="XS" color="purple">
            Edit
          </Text>
        </TouchableOpacityBox>
      </Box>
    </Box>
  </Box>
);

export default Header;
