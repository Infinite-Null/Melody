import axios from "axios";

async function getPlaylistData(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://saavn.dev/playlists?id=' + id,
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
    url: `https://saavn.dev/search/playlists?query=${searchText}&page=${page}&limit=${limit}`,
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
