import {
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native-gesture-handler";
import { createBox, createText } from "@shopify/restyle";

import { Theme } from "../constants/restyleTheme";
import Animated from "react-native-reanimated";
import { ViewProps } from "react-native";

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const TouchableOpacityBox = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity
);
export const AnimatedView = Animated.createAnimatedComponent(Box);
