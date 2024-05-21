import { Pressable,View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";
import { AddPlaylist, AddSongsToQueue, PauseSong, PlayOneSong } from "../../MusicPlayerFunctions";
import { memo, useContext } from "react";
import Context from "../../Context/Context";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";
import { EachSongMenuButton } from "../MusicPlayer/EachSongMenuButton";
import FormatArtist from "../../Utils/FormatArtists";
import { getYoutubeMusicStreamUrl } from "../../Api/YoutubeMusic/Song";
import TrackPlayer from "react-native-track-player";


export const EachSongCard = memo(function EachSongCard({isYoutubeMusic,title,artists,thumbnail,duration, id, url, index, songData, isFromLiked, isYoutubePlaylist}) {
  const {updateTrack, setVisible, setSongLoading} = useContext(Context)
  const formattedAritst = (isYoutubeMusic || isFromLiked) ? artists : FormatArtist(artists)
  async function AddSongToPlayerJioSavan () {
    if (isFromLiked){
      for (let i = 0; i < songData.length; i++){
        if (i === index){
          let url = songData[i]?.url
          if (songData[i]?.isYoutubeMusic === true){
            const resurl = await getYoutubeMusicStreamUrl(songData[i]?.id)
            url = resurl.url
          }
          const ForMusicPlayer = {
            url:url,
            title:FormatTitleAndArtist(songData[i]?.title),
            artist:FormatTitleAndArtist(formattedAritst),
            artwork:songData[i]?.artwork,
            image:songData[i]?.artwork,
            duration:songData[i]?.duration,
            id:songData[i]?.id,
            isYoutubeMusic:false,
            streamURL:url,
          }
          await TrackPlayer.reset()
          await TrackPlayer.add([ForMusicPlayer]);
          await TrackPlayer.play();
          updateTrack()
        }
        if(i > index){
          let url = songData[i]?.url
          if (songData[i]?.isYoutubeMusic === true){
            const resurl = await getYoutubeMusicStreamUrl(songData[i]?.id)
            url = resurl.url
          }
          const ForMusicPlayer = {
            url:url,
            title:FormatTitleAndArtist(songData[i]?.title),
            artist:FormatTitleAndArtist(formattedAritst),
            artwork:songData[i]?.artwork,
            image:songData[i]?.artwork,
            duration:songData[i]?.duration,
            id:songData[i]?.id,
            isYoutubeMusic:false,
            streamURL:url,
          }
          await AddSongsToQueue(ForMusicPlayer)
          updateTrack()
        }
      }
    } else {
      const ForMusicPlayer = []
      songData?.songs?.map((e,i)=>{
        if (i >= index){
          ForMusicPlayer.push({
            url:(isFromLiked) ? url : e?.downloadUrl[4].url,
            title:FormatTitleAndArtist(e?.name),
            artist:FormatTitleAndArtist(formattedAritst),
            artwork:e?.image[2]?.url,
            image:e?.image[2]?.url,
            duration:e?.duration,
            id:e?.id,
            isYoutubeMusic:false,
            streamURL:(isFromLiked) ? url : e?.downloadUrl[4].url,
          })
        }
      })
      await AddPlaylist(ForMusicPlayer)
      updateTrack()
    }
  }
  async function AddSongToPlayerYoutubeMusic () {
    if (isYoutubePlaylist){
      for (let i = 0; i < songData.length; i++){
        let { url } = await getYoutubeMusicStreamUrl(songData[i]?.id)
        if (i  === index){
          const ForMusicPlayer = {
            url:url,
            title:FormatTitleAndArtist(songData[i]?.title),
            artist:FormatTitleAndArtist(formattedAritst),
            artwork:songData[i]?.image,
            image:songData[i]?.image,
            duration:songData[i]?.duration,
            id:songData[i]?.id,
            isYoutubeMusic:true,
            streamURL:url,
          }
          console.log(ForMusicPlayer);
          await TrackPlayer.add([ForMusicPlayer]);
          await TrackPlayer.play();
          updateTrack()
        }
        if(i > index){
          let { url } = await getYoutubeMusicStreamUrl(songData[i]?.id)
          const ForMusicPlayer = {
            url:url,
            title:FormatTitleAndArtist(songData[i]?.title),
            artist:FormatTitleAndArtist(formattedAritst),
            artwork:songData[i]?.image,
            image:songData[i]?.image,
            duration:songData[i]?.duration,
            id:songData[i]?.id,
            isYoutubeMusic:true,
            streamURL:url,
          }
          await AddSongsToQueue(ForMusicPlayer)
          updateTrack()
        }
      }
    } else {
      try {
        await PauseSong()
        const streamLink = await getYoutubeMusicStreamUrl(id)
        console.log(streamLink.url);
        const ForMusicPlayer = {
          url:streamLink.url,
          title:FormatTitleAndArtist(title),
          artist:FormatTitleAndArtist(formattedAritst),
          artwork:thumbnail,
          image:thumbnail,
          duration:duration,
          id:id,
          isYoutubeMusic:true,
          streamURL:streamLink.url,
        }
        await PlayOneSong(ForMusicPlayer)
        updateTrack()
      } catch (e) {
        console.log(e);
      } finally {
        setSongLoading(false)
      }
    }
  }
  async function AddSongToPlayer () {
    if (!isYoutubeMusic || isFromLiked){
      await AddSongToPlayerJioSavan()
    } else {
      await AddSongToPlayerYoutubeMusic()
    }
  }

  return (
    <>
      <View style={{
        flexDirection:'row',
        width: "100%",
        marginRight:10,
        alignItems:"center",
        paddingRight:4,
        // backgroundColor:"red"
      }}>
        <Pressable onPress={AddSongToPlayer} style={{
          flexDirection:'row',
          gap:10,
          alignItems:"center",
          maxHeight:60,
          elevation:10,
          marginBottom:6,
          flex:1,
        }}>
          {/*((id === currentPlaying?.id ?? "") && playerState.state === "playing") ? require("../../Images/playing.gif") : ((id === currentPlaying?.id ?? "") && playerState.state !== "playing" ) ? require("../../Images/songPaused.gif") :*/}
          <FastImage source={{
            uri:thumbnail ? thumbnail : "https://toptrendpk.com/wp-content/uploads/2020/08/free-music-downloads.jpg",
          }} style={{
            height:50,
            width:50,
            borderRadius:10,
          }}/>
          <View style={{
            flex:1,
          }}>
            <PlainText text={FormatTitleAndArtist(title)} style={{width:"90%"}}/>
            <SmallText text={FormatTitleAndArtist(formattedAritst)} style={{width:"90%"}}/>
          </View>
        </Pressable>
        <EachSongMenuButton Onpress={()=>{
          setVisible({
            visible:true,
            title,
            artist:FormatTitleAndArtist(formattedAritst),image:thumbnail,
            id,
            url,
            duration,
            isYoutubeMusic:isYoutubeMusic ? true : false,
          })
        }}/>
      </View>
    </>
  );
})
