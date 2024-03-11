import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetFlatList, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { EachSongQueue } from "./EachSongQueue";
import { useFocusEffect } from "@react-navigation/native";

const QueueBottomSheet = () => {
  const backgroundColor = 'rgba(26,26,26,0.53)'
  // ref
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [155, '50%'], []);
  const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:backgroundColor,
      paddingHorizontal:10
    },
  });
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        style={{
          backgroundColor,
        }}
        handleIndicatorStyle={{
          backgroundColor:"rgba(255,255,255,0.97)",
        }}
        backgroundStyle={{
          backgroundColor:backgroundColor,
        }}
        handleStyle={{
          backgroundColor:backgroundColor,
        }}
      >
        <BottomSheetFlatList
          contentContainerStyle={{paddingHorizontal:20, paddingBottom:100}}
          data={[1,2,3,4,5,6,7,8,9,0]}
          keyExtractor={(i) => i}
          renderItem={()=><EachSongQueue title={"Hello"}  artist={"Ankit Kumar Shah"} />}
        />
      </BottomSheet>
  );
};



export default QueueBottomSheet;
