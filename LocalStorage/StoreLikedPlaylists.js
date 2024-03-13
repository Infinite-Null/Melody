import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetLikedPlaylist(){
  try {
    const value = await AsyncStorage.getItem('LikedPlaylists');
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return {
        playlist:{},
        count:0,
      }
    }
  } catch (e) {
    // error reading value
  }
}

async function SetLikedPlaylist(image, name, follower, id){
  const stored_value = await GetLikedPlaylist()
  const count = stored_value.count + 1
  const value = {
    ...stored_value,
    count,
  }
  value.playlist[id] = {image, name, follower, id, count}
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('LikedPlaylists', jsonValue);
  } catch (e) {
    console.log("Liked Song Save Error");
  }
}

async function DeleteALikedPlaylist(id){
  const stored_value = await GetLikedPlaylist()
  const value = {
    ...stored_value,
  }
  delete value.playlist[id]
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('LikedPlaylists', jsonValue);
  } catch (e) {
    console.log("Liked Playlist Save Error");
  }
}

export {GetLikedPlaylist, SetLikedPlaylist, DeleteALikedPlaylist}
