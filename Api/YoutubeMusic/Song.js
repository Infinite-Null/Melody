import YTMusic from "ytmusic-api";
import axios from "axios";
import {baseUrl} from "./baseUrl";
async function searchYoutubeMusicSong(query){
  const ytmusic = new YTMusic()
  await ytmusic.initialize(/* Optional: Custom cookies */)
  return await ytmusic.searchSongs(query)
}
async function getYoutubeMusicStreamUrl(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseUrl + "/getDownloadUrl/" + id,
    headers: { },
  };
  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    throw error
  }
}
async function getYoutubeMusicSuggestion(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseUrl + "/getSuggestion/" + id,
    headers: { },
  };
  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    throw error
  }
}




export {searchYoutubeMusicSong, getYoutubeMusicStreamUrl, getYoutubeMusicSuggestion}
