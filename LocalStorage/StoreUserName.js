import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetUserNameValue(){
  try {
    const value = await AsyncStorage.getItem('Name');
    if (value !== null) {
      return value
    } else {
      return ''
    }
  } catch (e) {
    // error reading value
  }
}

async function SetUserNameValue(name){
  try {
    await AsyncStorage.setItem('Name', name);
  } catch (e) {
    console.log("Name Save Error");
  }
}


export {GetUserNameValue, SetUserNameValue}
