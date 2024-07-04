import React, { useId, useRef, useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

import { AnimatedView, TouchableOpacityBox, Text, Box } from "../../index";
import WeightItem from "./weight/item";
import theme from "@/constants/restyleTheme";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const buttons = [
  { label: "Weight" },
  { label: "Body Condition" },
  { label: "Vet Visits" },
];

type Item = {
  id: string;
  title: string;
};

const DATA: Item[] = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
];

const CategoriesToggle = () => {
  const { width } = useWindowDimensions();
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleValue = useSharedValue(0);

  const scrollRef = useRef<ScrollView>(null);

  const handleToggle = (index: number) => {
    setIsAnimating(true); // multiple press handler
    toggleValue.value = index;
    scrollRef?.current?.scrollTo({
      x: index * width - theme.spacing.L * 2,
      animated: true,
    });
  };

  const knobStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(
          toggleValue.value * ((width - theme.spacing.L) * 0.32),
          {},
          () => {
            runOnJS(setIsAnimating)(false);
          }
        ),
      },
    ],
  }));

  const id = useId();

  const renderItem = ({ item }: { item: Item }) => (
    <WeightItem title={item.title} />
  );

  return (
    <Box flex={1}>
      <Box style={styles.switchContainer} mt="L">
        <Box
          flexDirection="row"
          position="absolute"
          justifyContent="space-around"
          flex={1}
          width="100%"
          opacity={0.5}
        >
          {buttons.map((b, i) => (
            <TouchableOpacityBox
              key={`${id}-${i}`}
              flex={1}
              disabled={isAnimating}
              onPress={() => {
                handleToggle(i);
              }}
            >
              <Text textAlign="center">{b.label}</Text>
            </TouchableOpacityBox>
          ))}
        </Box>
        <AnimatedView
          backgroundColor="white"
          height={38}
          width={"33%"}
          borderRadius={4}
          zIndex={1}
          alignItems="center"
          justifyContent="center"
          style={[knobStyle, { ...theme.shadows["lg"] }]}
        >
          <Text fontWeight="bold">{buttons[toggleValue.value].label}</Text>
        </AnimatedView>
      </Box>
      <ScrollView
        ref={scrollRef}
        horizontal
        contentContainerStyle={styles.scrollViewContainer}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      >
        <Box width={width - theme.spacing.L * 2} flex={1}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <Box height={12} />}
          />
        </Box>
        <Box width={width - theme.spacing.L * 2} flex={1}>
          <Box
            alignItems="center"
            justifyContent="center"
            flex={1}
            backgroundColor="primary"
          >
            <Text fontWeight="bold">BODY CONDITION</Text>
          </Box>
        </Box>
        <Box width={width - theme.spacing.L * 2} flex={1}>
          <Box
            alignItems="center"
            justifyContent="center"
            flex={1}
            backgroundColor="light"
          >
            <Text fontWeight="bold">VET VISITS</Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 4,
    width: "100%",
    height: 36,
    padding: 2,
  },
  scrollViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
});

export default CategoriesToggle;
