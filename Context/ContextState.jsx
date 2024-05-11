import Context from "./Context";
import { useEffect, useState } from "react";
import TrackPlayer, { Event, useTrackPlayerEvents } from "react-native-track-player";
import { getRecommendedSongs } from "../Api/Recommended";
import { AddSongsToQueue } from "../MusicPlayerFunctions";
import FormatArtist from "../Utils/FormatArtists";
import { Repeats } from "../Utils/Repeats";
import { SetQueueSongs } from "../LocalStorage/storeQueue";
import { EachSongMenuModal } from "../Component/Global/EachSongMenuModal";


const events = [
    Event.PlaybackActiveTrackChanged,
    Event.PlaybackError,
    Event.PlaybackState,
];
const ContextState = (props)=>{
    const [Index, setIndex] = useState(0);
    const [QueueIndex, setQueueIndex] = useState(0);
    const [currentPlaying, setCurrentPlaying]  = useState({})
    const [Repeat, setRepeat] = useState(Repeats.NoRepeat);
    const [Visible, setVisible] = useState({
        visible:false,
    });

    const [Queue, setQueue] = useState([]);
    async function updateTrack (){
        const tracks = await TrackPlayer.getQueue();
        // await SetQueueSongs(tracks)
        console.log(tracks);
        const ids = tracks.map((e)=>e.id)
        const queuesId = Queue.map((e)=>e.id)
        if (JSON.stringify(ids) !== JSON.stringify(queuesId)){
            setQueue(tracks)
        }
    }
    async function AddRecommendedSongs(index,id){
        const tracks = await TrackPlayer.getQueue();
        const totalTracks = tracks.length - 1
        if (index >= totalTracks - 2){
           try {
               const songs = await getRecommendedSongs(id)
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
           } catch (e) {
               console.log(e);
           } finally {
               await updateTrack()
           }
        }
    }

    useTrackPlayerEvents(events, (event) => {
        if (event.type === Event.PlaybackError) {
            console.warn('An error occured while playing the current track.');
        }
        if (event.type === Event.PlaybackActiveTrackChanged) {
            setCurrentPlaying(event.track)
            if (Repeat === Repeats.NoRepeat){
                if (event.track?.id ){
                    AddRecommendedSongs(event.index,event.track?.id)
                }
            }
        }
    });
    async function InitialSetup(){
        await TrackPlayer.setupPlayer()
        await updateTrack()
        await getCurrentSong()
        // await updateTrack()
    }
    async function getCurrentSong(){
        const song = await TrackPlayer.getActiveTrack()
        setCurrentPlaying(song)
    }
    useEffect(() => {
        InitialSetup()
    }, []);
    return <Context.Provider value={{currentPlaying,  Repeat, setRepeat, updateTrack, Index, setIndex, QueueIndex, setQueueIndex, setVisible, Queue}}>
        {props.children}
         <EachSongMenuModal setVisible={setVisible} Visible={Visible}/>
    </Context.Provider>
}

export default  ContextState
