import axios from "axios";

async function getPlaylistData(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://jiosavan-api-with-playlist.vercel.app/api/playlists?id=${id}&limit=100000`,
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
