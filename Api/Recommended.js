import axios from "axios";

async function getRecommendedSongs(artist,language,song){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://saavn.dev/artists/${artist}/recommendations/${song}?language=${language}`,
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
