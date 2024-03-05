import React, { useCallback, useMemo, useRef, useState } from "react";
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const BottomSheetMusic = () => {
  const width = (Dimensions.get("window").height * 0.1) - 30
  const snapPoints = useMemo(() => [115, '100%'], []);
  const bottomSheetRef = useRef(null)
  const [isFull, setIsFull] = useState(false);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
    if (index === 0) {setIsFull(false)}
    else {setIsFull(true)}
  }, []);
  return (
      <BottomSheet
      handleIndicatorStyle={{
        height:0,
        width:0,
        position:"absolute",
        backgroundColor:"rgba(0,0,0,0)",
      }}
        handleStyle={{
            height:0,
            overflow:"hidden",
            width:0,
            backgroundColor:"rgba(0,0,0,0)",
           position:"absolute",
        }}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}>
        <BottomSheetView  style={{
          ...styles.contentContainer,
          backgroundColor:isFull?"black":"rgb(255,255,255)",
        }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent:"space-between",
              height:"100%",
              paddingHorizontal:10,
              paddingTop:5,
            }}>
            <Image
              source={{
                uri: 'https://i0.wp.com/thespoon.tech/wp-content/uploads/2021/01/Imagr_pullcart_app_Nov2020.png?fit=1200%2C678&ssl=1',
              }}
              style={{
                height: width,
                width: width,
                borderRadius: 10,
              }}
            />
            <View style={{
                flex:1,
                height:width,
                alignItems:"flex-start",
                justifyContent:"center",
                paddingHorizontal:10,
            }}>
            <Text style={{
                color:"black",
                fontSize:20,
                fontWeight:900,
            }}>Happy</Text>
            <Text style={{
                color:"black"
            }}>Marsmello</Text>
            </View>
             <Image
              source={{
                uri: 'https://img.freepik.com/premium-vector/icons-play-pause-stop-vector_942802-1234.jpg',
              }}
              style={{
                height: width,
                width: 100,
                borderRadius: 10,
              }}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
  },
});

export default BottomSheetMusic;
