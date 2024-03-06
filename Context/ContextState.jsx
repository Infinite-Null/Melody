import Context from "./Context";
import { useState } from "react";
import { Event, useTrackPlayerEvents } from "react-native-track-player";


const events = [
    Event.PlaybackActiveTrackChanged,
    Event.PlaybackError,
    Event.PlaybackState,
];
const ContextState = (props)=>{
    const [currentPlaying, setCurrentPlaying]  = useState({})
    const [playerState, setPlayerState] = useState("paused")
    useTrackPlayerEvents(events, (event) => {
        if (event.type === Event.PlaybackError) {
            console.warn('An error occured while playing the current track.');
        }
        if (event.type === Event.PlaybackActiveTrackChanged) {
            setCurrentPlaying(event.track)
        }
        if (event.type === Event.PlaybackState) {
            setPlayerState(event.state);
        }
    });
    return <Context.Provider value={{currentPlaying, playerState}}>
        {props.children}
    </Context.Provider>
}

export default  ContextState
