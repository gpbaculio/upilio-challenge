import React, { useRef } from "react";
import { ScrollView, StyleSheet, Dimensions, Button } from "react-native";

import { AnimatedView, TouchableOpacityBox, Text, Box } from "../../index";

const { width, height } = Dimensions.get("window");

const ScrollToIndexExample = () => {
  const scrollRef = useRef<ScrollView>(null);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current?.scrollTo({
        x: width * index,
        animated: true,
      });
    }
  };

  return (
    <Box style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        contentContainerStyle={styles.scrollViewContainer}
        showsHorizontalScrollIndicator={false}
      >
        <Box width={width} height={height} backgroundColor="danger">
          <Text>Box 1</Text>
        </Box>
        <Box width={width} height={height} backgroundColor="purple">
          <Text>Box 2</Text>
        </Box>
        <Box width={width} height={height} backgroundColor="dark">
          <Text>Box 3</Text>
        </Box>
      </ScrollView>
      <Box style={styles.buttonContainer}>
        <Button title="Scroll to Box 1" onPress={() => scrollToIndex(0)} />
        <Button title="Scroll to Box 2" onPress={() => scrollToIndex(1)} />
        <Button title="Scroll to Box 3" onPress={() => scrollToIndex(2)} />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
});

export default ScrollToIndexExample;
