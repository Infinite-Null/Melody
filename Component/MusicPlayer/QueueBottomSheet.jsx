import React, { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { QueueRenderSongs } from "./QueueRenderSongs";

const QueueBottomSheet = ({Index}) => {
  const backgroundColor = 'rgba(16,16,16,0.58)'
  const bottomSheetRef = useRef(null);
  return (
      <BottomSheet
        enablePanDownToClose={false}
        index={Index}
        animateOnMount={false}
        snapPoints={['19%', '50%']}
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
        <QueueRenderSongs key={1} Index={Index}/>
      </BottomSheet>
  );
};



export default QueueBottomSheet;
