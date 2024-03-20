import TrackPlayer from "react-native-track-player";
import { setRepeatMode } from "react-native-track-player/lib/trackPlayer";
import { GetPlaybackQuality } from "./LocalStorage/AppSettings";

async function PlayOneSong(song){
  await  TrackPlayer.reset()
  await TrackPlayer.add([song]);
  await TrackPlayer.play();
}
async function AddPlaylist (songs){
  await  TrackPlayer.reset()
  await TrackPlayer.add(songs);
  await TrackPlayer.play();
}

async function AddSongsToQueue(songs){
  await TrackPlayer.add(songs);
}
async function PlaySong(){
  await TrackPlayer.play();
}
async function PauseSong(){
  await TrackPlayer.pause();
}

async function SetProgressSong(value){
  await TrackPlayer.seekTo(value);
}

async function PlayNextSong(){
  await TrackPlayer.skipToNext();
  PlaySong()
}

async function PlayPreviousSong(){
  await TrackPlayer.skipToPrevious();
  PlaySong()
}
async function SkipToTrack(trackIndex){
  await TrackPlayer.skip(trackIndex);
  await PlaySong()
}
async function SetRepeatMode(mode){
  await setRepeatMode(mode)
}

async function getIndexQuality(){
  const PlaybackQuality = [
    { value: '12kbps' },
    { value: '48kbps' },
    { value: '96kbps' },
    { value: '160kbps' },
    { value: '320kbps' },
  ];
  const data = await GetPlaybackQuality()
  let index = 4
  PlaybackQuality.map((e, i)=>{
    if (e.value === data){
      index = i
    }
  })
  return index
}

export {PlayOneSong, PlaySong, PauseSong, SetProgressSong, PlayNextSong, AddPlaylist, PlayPreviousSong, AddSongsToQueue, SkipToTrack,SetRepeatMode, getIndexQuality}
