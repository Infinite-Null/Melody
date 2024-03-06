import Context from "./Context";
import { useEffect, useState } from "react";
import { GetPlayingStatus } from "../MusicPlayerFunctions";



const ContextState = (props)=>{
    const [isplaying, setIsPlaying] = useState(false);
    async function playBackStatus(){
        const state = await GetPlayingStatus()
        if (state.state === "paused"){
            setIsPlaying(false)
        } else {
            setIsPlaying(true)
        }
    }
    useEffect(() => {
        playBackStatus()
    }, []);
    return <Context.Provider value={{isplaying,playBackStatus}}>
        {props.children}
    </Context.Provider>
}

export default  ContextState
