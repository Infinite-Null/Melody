import React, { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { QueueRenderSongs } from "./QueueRenderSongs";
import { PlainText } from "../Global/PlainText";
import Entypo from "react-native-vector-icons/Entypo";
import { View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

const QueueBottomSheet = () => {
  const backgroundColor = 'rgba(5,5,5,0.76)'
  const bottomSheetRef = useRef(null);
  const [index, setIndex] = useState(0);
  return (
      <BottomSheet
        index={0}
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
            <Octicons name={"dash"} size={24} color="white" />
            <PlainText text={"Song Queue"}/>
          </View>
        }}
        backgroundStyle={{
          backgroundColor:"rgb(0,0,0,0)",
        }}
        handleStyle={{
          backgroundColor:backgroundColor,
        }}
      >
        <QueueRenderSongs/>
      </BottomSheet>
  );
};



export default QueueBottomSheet;
