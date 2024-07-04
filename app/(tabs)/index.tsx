import { Image, ImageProps } from "expo-image";

import {
  createBox,
  createRestyleComponent,
  createText,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "@/constants/restyleTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const guineaPig = require("@/assets/images/guinea-pig.png");

const Text = createText<Theme>();
const Box = createBox<Theme>();

const ExpoImage = createBox<Theme, ImageProps>(Image);

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();

  return (
    <Box flex={1} style={{ paddingTop: top }} p="L">
      <Box flexDirection="row">
        <ExpoImage
          width={30}
          height={30}
          source={guineaPig}
          contentFit="cover"
          transition={1000}
        />
      </Box>
      <Text>s</Text>
    </Box>
  );
}
