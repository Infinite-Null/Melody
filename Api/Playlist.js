import axios from "axios";
import { jiosavan } from "jiosavan";

async function getPlaylistData(id){
  try {
    // const response = await axios.request(config);
    return await jiosavan.getPlaylist(id)
  }
  catch (error) {
    throw error
  }
}

async function getSearchPlaylistData(searchText,page,limit){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://jio-savan-api-sigma.vercel.app/search/playlists?query=${searchText}&page=${page}&limit=${limit}`,
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

export {getPlaylistData,getSearchPlaylistData}
