import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetYoutubeMusicValue(){
  try {
    const value = await AsyncStorage.getItem('YoutubeMusic');
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return []
    }
  } catch (e) {
    // error reading value
  }
}

async function SetYoutubeMusicValue(YoutubeMusic){
  try {
    await AsyncStorage.setItem('YoutubeMusic', JSON.stringify(YoutubeMusic));
  } catch (e) {
    console.log("YoutubeMusic Save Error");
  }
}


export {GetYoutubeMusicValue, SetYoutubeMusicValue}
