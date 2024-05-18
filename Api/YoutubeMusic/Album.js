import { listMusicsFromAlbum, searchAlbums } from "node-youtube-music";

async function searchYoutubeMusicAlbum(){
  try {
    return await searchAlbums('Human after all')
  }
  catch (error) {
    throw error
  }
}
async function getYoutubeMusicAlbumSongs(albumId){
  try {
    return await listMusicsFromAlbum(albumId);
  }
  catch (error) {
    throw error
  }
}

export {searchYoutubeMusicAlbum, getYoutubeMusicAlbumSongs}
