import React, { memo } from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { EachSongQueue } from "./EachSongQueue";

export const QueueRenderSongs = memo(function QueueRenderSongs({ Queue }) {
  return <BottomSheetFlatList
    contentContainerStyle={{paddingHorizontal:20, paddingBottom:100, paddingRight:60}}
    data={Queue}
    keyExtractor={(i)=>i + Math.random() + Math.random()}
    renderItem={(item)=><EachSongQueue title={item.item.title} key={item.index + Math.random() + Math.random()}  artist={item.item.artist} id={item.item.id} index={item.index} image={item.item.artwork}/>}
  />
})
