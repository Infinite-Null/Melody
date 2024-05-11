import React, { useCallback, useContext, useEffect, useRef } from "react";
import { BackHandler, StyleSheet } from "react-native";
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { MinimizedMusic } from "./MinimizedMusic";
import { FullScreenMusic } from "./FullScreenMusic";
import Context from "../../Context/Context";

const BottomSheetMusic = ({color}) => {
  const bottomSheetRef = useRef(null)
  const {Index, setIndex} = useContext(Context)
  useEffect(() => {
    const backAction = () => {
      setIndex(0)
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
   if (Index === 0){
     backHandler.remove()
   }
    return ()=>{ backHandler.remove()};
  }, [Index]);

  const handleSheetChanges = useCallback(index => {
    if (index < 0){
      setIndex(0)
    } else {
      setIndex(index)
    }
  }, []);
  const updateIndex = useCallback((index)=>{
    setIndex(index)
  },[])
  return (
      <BottomSheet
        enableContentPanningGesture={false}
         detached={false}
         enableOverDrag={false}
         handleIndicatorStyle={{
        height:0,
        width:0,
        position:"absolute",
        backgroundColor:"rgba(0,0,0,0)",
      }}
        backgroundStyle={{
          backgroundColor:color,
        }}
        // handleComponent={props => <MinimizedMusic  setIndex={updateIndex} color={color}/>}
        handleHeight={5}
        handleStyle={{
          position:"absolute",
        }}
        snapPoints={[155, '100%']}
        ref={bottomSheetRef}
         index={Index}
        onChange={handleSheetChanges}>
        <BottomSheetView  style={{
          ...styles.contentContainer,
          backgroundColor:color,
        }}>
          {Index !== 1 &&  <MinimizedMusic  setIndex={updateIndex}/>}
          {Index === 1 &&  <FullScreenMusic color={color} Index={Index} setIndex={updateIndex}/>}
        </BottomSheetView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(21,21,21)",
  },
  contentContainer: {
    flex: 1,
  },
});

export default BottomSheetMusic;
