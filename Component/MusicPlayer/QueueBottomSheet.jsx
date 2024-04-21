import React, { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { QueueRenderSongs } from "./QueueRenderSongs";
import { PlainText } from "../Global/PlainText";
import Entypo from "react-native-vector-icons/Entypo";
import { View } from "react-native";

const QueueBottomSheet = ({Index}) => {
  const backgroundColor = 'rgba(5,5,5,0.76)'
  const bottomSheetRef = useRef(null);
  const [index, setIndex] = useState(0);
  return (
      <BottomSheet
        onChange={(index)=>{
          setIndex(index)
        }}
        enablePanDownToClose={false}
        animateOnMount={false}
        snapPoints={[130, '50%']}
        ref={bottomSheetRef}
        style={{
          backgroundColor,
        }}
        handleComponent={props => {
          return <View style={{alignItems:"center", justifyContent:"center", backgroundColor:"transparent", height:60}}>
            <Entypo name={index === 0 ? "chevron-up" : "chevron-down"} size={24} color="white" />
            <PlainText text={index === 0 ? "Swipe up to see Queue" : "Swipe down to close Queue"}/>
          </View>
        }}
        backgroundStyle={{
          backgroundColor:"rgb(0,0,0,0)",
        }}
        handleStyle={{
          backgroundColor:backgroundColor,
        }}
      >
        {index === 1 && <QueueRenderSongs/>}
      </BottomSheet>
  );
};



export default QueueBottomSheet;
