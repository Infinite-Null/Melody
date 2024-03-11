import React, { useContext, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Context from "../../Context/Context";
import { QueueRenderSongs } from "./QueueRenderSongs";

const QueueBottomSheet = () => {
  const { Queue } = useContext(Context)
  const backgroundColor = 'rgba(26,26,26,0.53)'
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [155, '50%'], [])
  return (
      <BottomSheet
        animateOnMount={false}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
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
        <QueueRenderSongs key={1} Queue={Queue}/>
      </BottomSheet>
  );
};



export default QueueBottomSheet;
