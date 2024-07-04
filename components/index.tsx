import { TouchableOpacity } from "react-native-gesture-handler";
import { createBox, createText } from "@shopify/restyle";

import { Theme } from "../constants/restyleTheme";

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const TouchableOpacityBox = createBox<Theme>(TouchableOpacity);
