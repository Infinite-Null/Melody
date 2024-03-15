import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetLanguageValue(){
  try {
    const value = await AsyncStorage.getItem('Language');
    if (value !== null) {
      return value
    } else {
      return ''
    }
  } catch (e) {
    // error reading value
  }
}

async function SetLanguageValue(Language){
  try {
    await AsyncStorage.setItem('Language', Language);
  } catch (e) {
    console.log("Language Save Error");
  }
}


export {GetLanguageValue, SetLanguageValue}
