import { listMusicsFromPlaylist,  searchPlaylists } from "node-youtube-music";

async function searchYoutubeMusicPlaylist(query){
  try {
    return await searchPlaylists(query)
  }
  catch (error) {
    throw error
  }
}
async function getYoutubeMusicPlaylistSongs(playlistId){
  try {
    return await listMusicsFromPlaylist(playlistId);
  }
  catch (error) {
    throw error
  }
}

export {searchYoutubeMusicPlaylist, getYoutubeMusicPlaylistSongs}
