import axios from "axios";

async function getSearchSongData(searchText,page,limit){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://saavn.dev/api/search/songs?query=${searchText}&page=${page}&limit=${limit}`,
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
 function getPromiseSongData(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://saavn.dev/api/songs/${id}`,
    headers: { },
  };
  return axios.request(config);
}

async function getLyricsSongData(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://saavn.dev/api/songs/${id}/lyrics`,
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

export {getSearchSongData, getPromiseSongData, getLyricsSongData}
