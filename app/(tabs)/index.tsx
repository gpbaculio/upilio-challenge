import {
  createBox,
  createRestyleComponent,
  createText,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "@/constants/restyleTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { Image, StyleSheet } from "react-native";
const guineaPig = require("@/assets/images/guinea-pig.png");
import ExpoImage from "@/components/ExpoImage";
const Text = createText<Theme>();
const Box = createBox<Theme>();

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();

  return (
    <Box flex={1} style={{ paddingTop: top }} p="L" backgroundColor="white">
      <Box flexDirection="row">
        <ExpoImage
          borderRadius={60}
          source={guineaPig}
          width={50}
          height={50}
          shadow="sm"
        />
      </Box>
      <Text>s</Text>
    </Box>
  );
}
