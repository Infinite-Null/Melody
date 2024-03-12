import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetLikedSongs(){
  try {
    const value = await AsyncStorage.getItem('LikedSongs');
    if (value !== null) {
     return JSON.parse(value)
    } else {
      return {
        songs:{},
        count:0,
      }
    }
  } catch (e) {
    // error reading value
  }
}

async function SetLikedSongs(title,artist,image,id,url,duration,language){
  const stored_value = await GetLikedSongs()
  const count = stored_value.count + 1
  const value = {
      ...stored_value,
      count,
  }
  value.songs[id] = {title,artist,image,id,url,duration,language,count}
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('LikedSongs', jsonValue);
  } catch (e) {
    console.log("Liked Song Save Error");
  }
}
async function DeleteALikedSong(id){
  const stored_value = await GetLikedSongs()
  const value = {
      ...stored_value,
  }
  delete value.songs[id]
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('LikedSongs', jsonValue);
  } catch (e) {
    console.log("Liked Song Save Error");
  }
}
export {GetLikedSongs, SetLikedSongs, DeleteALikedSong}
