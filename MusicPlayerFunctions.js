import TrackPlayer from "react-native-track-player";

async function PlayOneSong(song){
  await  TrackPlayer.reset()
  await TrackPlayer.add([song]);
  await TrackPlayer.play();
}

async function PlaySong(){
  await TrackPlayer.play();
}
async function PauseSong(){
  await TrackPlayer.pause();
}

async function GetCurrentSong(){
  return await TrackPlayer.getActiveTrack()
}
export {PlayOneSong, PlaySong, PauseSong, GetCurrentSong}
