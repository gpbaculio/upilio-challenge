import { useSafeAreaInsets } from "react-native-safe-area-context";

import PetInfoHeader from "@/components/pet-info/header";
import PetInfoBody from "@/components/pet-info/body";
import { Box } from "@/components";

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();

  return (
    <Box flex={1} style={{ paddingTop: top }} p="L" backgroundColor="white">
      <PetInfoHeader />
      <PetInfoBody />
    </Box>
  );
}
