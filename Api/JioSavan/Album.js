import axios from "axios";

async function getAlbumData(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: "https://jiosavan-api-with-playlist.vercel.app/api/albums?id=" + id,
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

async function getSearchAlbumData(searchText,page,limit){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://jiosavan-api-with-playlist.vercel.app/api/search/albums?query=${searchText}&page=${page}&limit=${limit}`,
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
export {getAlbumData, getSearchAlbumData}
