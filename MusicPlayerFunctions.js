import TrackPlayer from "react-native-track-player";

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
}

async function PlayPreviousSong(){
  await TrackPlayer.skipToPrevious();
}

export {PlayOneSong, PlaySong, PauseSong, SetProgressSong, PlayNextSong, AddPlaylist, PlayPreviousSong}
