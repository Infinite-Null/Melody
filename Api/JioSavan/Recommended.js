import axios from "axios";

async function getRecommendedSongs(id){
  console.log(id);
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://jiosavan-api-with-playlist.vercel.app/api/songs/${id}/suggestions`,
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

export {getRecommendedSongs}
