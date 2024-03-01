import axios from "axios";

async function getHomePageData(languages){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://jio-savan-api-sigma.vercel.app/modules?language=' + languages,
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

export {getHomePageData}
