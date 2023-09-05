import React, { useMemo, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const stylesheet = ({ visible }) =>
  StyleSheet.create({
    container: {
      height: Dimensions.get("screen").height - 200,
      opacity: visible ? 1 : 0,
      backgroundColor: "red",
      position: "relative",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
  });

const Component = ({ onClose, visible }) => {
  const styles = stylesheet({ visible });

  return <View style={styles.container}></View>;
};

export const Open = Component;
