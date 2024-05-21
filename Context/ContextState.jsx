import Context from "./Context";
import { useEffect, useState } from "react";
import TrackPlayer, { Event, useTrackPlayerEvents } from "react-native-track-player";
import { getRecommendedSongs } from "../Api/JioSavan/Recommended";
import { AddSongsToQueue } from "../MusicPlayerFunctions";
import FormatArtist from "../Utils/FormatArtists";
import { Repeats } from "../Utils/Repeats";
import { EachSongMenuModal } from "../Component/Global/EachSongMenuModal";
import { getYoutubeMusicStreamUrl, getYoutubeMusicSuggestion } from "../Api/YoutubeMusic/Song";


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
    const [songLoading, setSongLoading] = useState(false);

    async function updateTrack (){
        const tracks = await TrackPlayer.getQueue();
        // await SetQueueSongs(tracks)
        const ids = tracks.map((e)=>e.id)
        const queuesId = Queue.map((e)=>e.id)
        if (JSON.stringify(ids) !== JSON.stringify(queuesId)){
            setQueue(tracks)
        }
    }
    async function AddRecommendedSongsJiosavan(index,id){
        const tracks = await TrackPlayer.getQueue();
        const totalTracks = tracks.length - 1
        if (index >= totalTracks - 2){
           try {
               const songs = await getRecommendedSongs(id)
               if (songs?.data?.length !== 0){
                   const ForMusicPlayer = songs.data.map((e)=> {
                       return {
                           url:e.downloadUrl[4].url,
                           title:e.name.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
                           artist:FormatArtist(e?.artists?.primary).toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
                           artwork:e.image[2].url,
                           duration:e.duration,
                           id:e.id,
                           streamURL:e.downloadUrl[4].url,
                            isYoutubeMusic:false,
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
    async function AddRecommendedSongsYoutubeMusic(index,id){
        const tracks = await TrackPlayer.getQueue();
        const totalTracks = tracks.length - 1
        if (index >= totalTracks - 2){
            try {
                const songs = await getYoutubeMusicSuggestion(id)
                const final  = songs.slice(0,10)
                const forMusicPlayer = []
                for (let i = 0; i < final.length; i++){
                   if (final[i].youtubeId !== id){
                       const songUrl = await getYoutubeMusicStreamUrl(songs[i].youtubeId)
                       forMusicPlayer.push({
                           url:songUrl.url,
                           image:songs[i].thumbnailUrl,
                           title:songs[i].title,
                           artist:songs[i]?.artists[0]?.name ?? "",
                           artwork:songs[i].thumbnailUrl,
                           duration:songs[i].duration.totalSeconds,
                           id:songs[i].youtubeId,
                           streamURL:songUrl.url,
                           isYoutubeMusic:true,
                       })
                   }
                }
                await AddSongsToQueue(forMusicPlayer)
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
            console.log(event.message);
        }
        if (event.type === Event.PlaybackActiveTrackChanged) {
            setCurrentPlaying(event.track)
            if (Repeat === Repeats.NoRepeat){
                if (event.track?.isYoutubeMusic){
                    AddRecommendedSongsYoutubeMusic(event?.index,event.track?.id)
                } else {
                    AddRecommendedSongsJiosavan(event?.index,event.track?.id)
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
    return <Context.Provider value={{currentPlaying,  Repeat, setRepeat, updateTrack, Index, setIndex, QueueIndex, setQueueIndex, setVisible, Queue, songLoading, setSongLoading}}>
        {props.children}
         <EachSongMenuModal setVisible={setVisible} Visible={Visible}/>
    </Context.Provider>
}

export default  ContextState
