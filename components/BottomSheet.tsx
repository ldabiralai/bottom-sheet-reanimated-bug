import React, { useRef, useState, useMemo } from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";

import GorhomBottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";

const stylesheet = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  backdropBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
});

export const BottomSheet = ({
  closedHeight,
  closedComponent,
  openComponent,
  onOpen,
  onClose,
}) => {
  const styles = stylesheet;
  const bottomSheetRef = useRef<GorhomBottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const initialSnapPoints = useMemo(
    () => [closedHeight, "CONTENT_HEIGHT"],
    [closedHeight]
  );

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const handleOpen = () => {
    onOpen();
    setIsOpen(true);

    setTimeout(() => {
      bottomSheetRef.current?.expand();
    });
  };

  const handleClose = () => {
    onClose();
    bottomSheetRef.current?.collapse();
    setIsOpen(false);
  };

  return (
    <View style={styles.container} pointerEvents="box-none">
      {isOpen ? (
        <TouchableWithoutFeedback style={styles.backdrop} onPress={handleClose}>
          <View style={styles.backdropBackground} />
        </TouchableWithoutFeedback>
      ) : null}
      <GorhomBottomSheet
        ref={bottomSheetRef}
        index={0}
        enableOverDrag={false}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}
        animateOnMount={false}
        handleComponent={() => null}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
      >
        <BottomSheetView onLayout={handleContentLayout}>
          {closedComponent({ open: handleOpen, visible: !isOpen })}
          {openComponent({ close: handleClose, visible: isOpen })}
        </BottomSheetView>
      </GorhomBottomSheet>
    </View>
  );
};
