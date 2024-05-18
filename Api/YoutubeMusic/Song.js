import { getSuggestions, searchMusics } from "node-youtube-music";
import { downloadManager } from "ytmusic_api_unofficial";

async function searchYoutubeMusicSong(query){
  try {
    return await searchMusics(query)
  }
  catch (error) {
    throw error
  }
}
async function getYoutubeMusicStreamUrl(id){
  try {
    return await downloadManager.download(id, 'mp3', "high")
  }
  catch (error) {
    throw error
  }
}
async function getYoutubeMusicSuggestion(id){
  try {
    return await getSuggestions(id);
  }
  catch (error) {
    throw error
  }
}




export {searchYoutubeMusicSong, getYoutubeMusicStreamUrl, getYoutubeMusicSuggestion}
