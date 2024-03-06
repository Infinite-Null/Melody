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

async function SetProgressSong(value){
  await TrackPlayer.seekTo(value);
}
export {PlayOneSong, PlaySong, PauseSong, SetProgressSong}
