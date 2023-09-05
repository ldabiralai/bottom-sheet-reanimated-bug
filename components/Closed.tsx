import React, { useMemo } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const stylesheet = StyleSheet.create({
  container: {
    position: "relative",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    zIndex: 10,
    backgroundColor: "blue",
    height: 100,
  },
});

const Component = ({ onOpen, visible }) => {
  const styles = stylesheet;

  if (!visible) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onOpen}>
      <View style={styles.container}>
        <Text>Open me</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Closed = Component;
