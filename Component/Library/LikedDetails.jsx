import { Dimensions, View } from "react-native";
import { Heading } from "../Global/Heading";
import { Spacer } from "../Global/Spacer";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { AddPlaylist } from "../../MusicPlayerFunctions";
import { useContext } from "react";
import Context from "../../Context/Context";
import { PlayButton } from "../Playlist/PlayButton";


export const LikedDetails = ({name,Data}) => {
  const {updateTrack} = useContext(Context)
  const ForMusicPlayer = Data?.map((e)=>{
   if (e) {return {
       url:e.url,
       title:e?.title,
       artist:e?.artist,
       artwork:e?.image,
       duration:e?.duration,
       id:e?.id,
       language:e?.language,
       artistID:e?.primary_artists_id,
     }}
  })
  async function AddToPlayer(){
    if (ForMusicPlayer[0]){
      await AddPlaylist(ForMusicPlayer)
      updateTrack()
    } else {
      await AddPlaylist(ForMusicPlayer.splice(1,ForMusicPlayer.length))
      updateTrack()
    }
  }
  const theme = useTheme()
  const width = Dimensions.get('window').width
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(44,44,44,0)', 'rgb(0,0,0)', theme.colors.background]} style={{
      padding:10,
      alignItems:"center",
      justifyContent:"space-between",
      flexDirection:"row",
    }}>
        <View style={{
          paddingLeft:5,
          maxWidth:width * 0.8,
        }}>
          <Heading text={name}/>
          <Spacer/>
        </View>
        <PlayButton onPress={()=>{
          AddToPlayer()
        }}/>
    </LinearGradient>
  );
};
