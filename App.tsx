import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { BottomSheet } from "./components/BottomSheet";
import { Closed } from "./components/Closed";
import { Open } from "./components/Open";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Hello</Text>
        <BottomSheet
          closedHeight={100}
          closedComponent={({ open, visible }) => (
            <Closed visible={visible} onOpen={open} />
          )}
          openComponent={({ close, visible }) => (
            <Open visible={visible} onClose={close} />
          )}
          onOpen={() => console.log("open")}
          onClose={() => console.log("closed")}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
