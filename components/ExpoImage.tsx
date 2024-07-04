import React from "react";
import { Image, ImageProps } from "react-native";
import { createBox } from "@shopify/restyle";
import theme, { Theme } from "../constants/restyleTheme";

const Box = createBox<Theme>();
const ExpoImageBox = createBox<Theme, ImageProps>(Image);

interface ExpoImageBoxProps extends ImageProps {
  shadow?: keyof Theme["shadows"];
}

const ExpoImage: React.FC<ExpoImageBoxProps> = ({
  shadow = "none",
  style,
  ...props
}) => {
  return (
    <Box elevation={2} style={[style, { ...theme.shadows[shadow] }]}>
      <ExpoImageBox {...props} elevation={2} />
    </Box>
  );
};

export default ExpoImage;
