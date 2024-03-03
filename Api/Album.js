import axios from "axios";

async function getAlbumData(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://saavn.dev/albums?id=' + id,
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

export {getAlbumData}
