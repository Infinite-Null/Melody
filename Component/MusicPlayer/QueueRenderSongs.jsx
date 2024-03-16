import React, { memo, useEffect, useState } from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { EachSongQueue } from "./EachSongQueue";
import { GetQueueSongs } from "../../LocalStorage/storeQueue";

export const QueueRenderSongs = memo(function QueueRenderSongs({Index}) {
  // const  Queue } = useContext(Context)
const [Queue, setQueue] = useState([]);
async function InitialSetup(){
    const tracks =  await GetQueueSongs()
    if (JSON.stringify(tracks) !== JSON.stringify(Queue)){
      console.log(true);
      setQueue(tracks)
    }
  }
useEffect(() => {
    InitialSetup()
  console.log(Index);
  }, [Index]);
  return <BottomSheetFlatList
    contentContainerStyle={{paddingHorizontal:20, paddingBottom:100, paddingRight:60}}
    data={Queue}
    keyExtractor={(i)=>i + Math.random() + Math.random()}
    renderItem={(item)=><EachSongQueue title={item.item.title} key={item.index + Math.random() + Math.random()}  artist={item.item.artist} id={item.item.id} index={item.index} image={item.item.artwork}/>}
  />
})
