import axios from "axios";

async function getSearchSongData(searchText,page,limit){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://jiosavan-api-with-playlist.vercel.app/api/search/songs?query=${searchText}&page=${page}&limit=${limit}`,
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

async function getLyricsSongData(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://jiosavan-api-with-playlist.vercel.app/api/songs/${id}/lyrics`,
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

export {getSearchSongData, getLyricsSongData}
