import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetFontSizeValue(){
  try {
    const value = await AsyncStorage.getItem('FontSize');
    if (value !== null) {
      return value
    } else {
      return 'Medium'
    }
  } catch (e) {
    // error reading value
  }
}

async function SetFontSizeValue(FontSize){
  try {
    await AsyncStorage.setItem('FontSize', FontSize);
  } catch (e) {
    console.log("Font size Save Error");
  }
}

async function GetPlaybackQuality(){
  try {
    const value = await AsyncStorage.getItem('PlaybackQuality');
    if (value !== null) {
      return value
    } else {
      return '320kbps'
    }
  } catch (e) {
    // error reading value
  }
}

async function SetPlaybackQuality(PlaybackQuality){
  try {
    await AsyncStorage.setItem('PlaybackQuality', PlaybackQuality);
  } catch (e) {
    console.log("PlaybackQuality Save Error");
  }
}

async function GetDownloadPath(){
  try {
    const value = await AsyncStorage.getItem('DownloadPath');
    if (value !== null) {
      return value
    } else {
      return 'Music'
    }
  } catch (e) {
    // error reading value
  }
}

async function SetDownloadPath(DownloadPath){
  try {
    await AsyncStorage.setItem('DownloadPath', DownloadPath);
  } catch (e) {
    console.log("SetDownloadPath Save Error");
  }
}
export {GetFontSizeValue, SetFontSizeValue, GetPlaybackQuality, SetPlaybackQuality, GetDownloadPath, SetDownloadPath}
