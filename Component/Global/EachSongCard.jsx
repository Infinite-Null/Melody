import { Dimensions, Pressable,View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";
import { AddPlaylist, PlayOneSong } from "../../MusicPlayerFunctions";
import { memo, useContext } from "react";
import Context from "../../Context/Context";
import { useActiveTrack, usePlaybackState } from "react-native-track-player";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";
import { EachSongMenuButton } from "../MusicPlayer/EachSongMenuButton";
import FormatArtist from "../../Utils/FormatArtists";


export const EachSongCard = memo(function EachSongCard({isYoutubeMusic,title,artists,thumbnail,duration, id, url, index, songData}) {
  const {updateTrack, setVisible} = useContext(Context)
  const currentPlaying = useActiveTrack()
  const playerState = usePlaybackState()

  async function AddSongToPlayerJioSavan () {
    const ForMusicPlayer = []
        songData?.songs?.map((e,i)=>{
          if (i >= index){
            ForMusicPlayer.push({
              url:e?.downloadUrl[4].url,
              title:FormatTitleAndArtist(e?.name),
              artist:FormatTitleAndArtist(FormatArtist(e?.artists?.primary)),
              artwork:e?.image[2]?.url,
              image:e?.image[2]?.url,
              duration:e?.duration,
              id:e?.id,
              isYoutubeMusic:false,
            })
          }
        })
    await AddPlaylist(ForMusicPlayer)
    updateTrack()
  }
  async function AddSongToPlayer () {
    if (!isYoutubeMusic){
      await AddSongToPlayerJioSavan()
    } else {

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
            <SmallText text={FormatTitleAndArtist(FormatArtist(artists))} style={{width:"90%"}}/>
          </View>
        </Pressable>
        <EachSongMenuButton Onpress={()=>{
          setVisible({
            visible:true,
            // title,artist,image,id,url,duration,language,
          })
        }}/>
      </View>
    </>
  );
})
