import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetLikedSongs(){
  try {
    const value = await AsyncStorage.getItem('LikedSongs');
    if (value !== null) {
     return JSON.parse(value)
    } else {
      return {}
    }
  } catch (e) {
    // error reading value
  }
}

async function SetLikedSongs(title,artist,image,id,url,duration,language){
  const stored_value = await GetLikedSongs()
  const value = {
    ...stored_value,
  }
  value[id] = {title,artist,image,id,url,duration,language}
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('LikedSongs', jsonValue);
  } catch (e) {
    console.log("Liked Song Save Error");
  }
}

export {GetLikedSongs, SetLikedSongs}
