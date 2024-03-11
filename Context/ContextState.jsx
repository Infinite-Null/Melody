import Context from "./Context";
import { useState } from "react";
import TrackPlayer, { Event, useTrackPlayerEvents } from "react-native-track-player";
import { getRecommendedSongs } from "../Api/Recommended";
import { AddSongsToQueue } from "../MusicPlayerFunctions";
import FormatArtist from "../Utils/FormatArtists";


const events = [
    Event.PlaybackActiveTrackChanged,
    Event.PlaybackError,
    Event.PlaybackState,
];
const ContextState = (props)=>{
    const [currentPlaying, setCurrentPlaying]  = useState({})
    const [playerState, setPlayerState] = useState("paused")
    async function AddRecommendedSongs(index,id){
        const tracks = await TrackPlayer.getQueue();
        const totalTracks = tracks.length - 1
        if (index >= totalTracks - 2){
            const songs = await getRecommendedSongs(id)
            console.log(songs.data);
            if (songs?.data?.length !== 0){
                const ForMusicPlayer = songs.data.map((e)=> {
                    return {
                        url:e.downloadUrl[3].url,
                        title:e.name.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
                        artist:FormatArtist(e?.artists?.primary).toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
                        artwork:e.image[2].url,
                        duration:e.duration,
                        id:e.id,
                        language:e.language,
                    }
                })
                await AddSongsToQueue(ForMusicPlayer)
            }
        }
    }
    useTrackPlayerEvents(events, (event) => {
        if (event.type === Event.PlaybackError) {
            console.warn('An error occured while playing the current track.');
        }
        if (event.type === Event.PlaybackActiveTrackChanged) {
            setCurrentPlaying(event.track)
            if (event.track?.id && event.track?.language && event.track?.artistID){
                AddRecommendedSongs(event.index,event.track?.id,event.track?.language,event.track?.artistID)
            }
        }
        if (event.type === Event.PlaybackState) {
            setPlayerState(event.state)
        }
    });
    return <Context.Provider value={{currentPlaying, playerState}}>
        {props.children}
    </Context.Provider>
}

export default  ContextState
