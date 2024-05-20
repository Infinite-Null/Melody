import axios from "axios";
import { baseUrl } from "./baseUrl";

async function getYoutubeMusicPlaylistSongs(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseUrl + "/listMusicsFromPlaylist/" + id,
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

export {getYoutubeMusicPlaylistSongs}
