import { useContext } from "react";
import Context from "../../Context/Context";
import { AddPlaylist } from "../../MusicPlayerFunctions";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";
import { useTheme } from "@react-navigation/native";
import { Dimensions, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Heading } from "../Global/Heading";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SmallText } from "../Global/SmallText";
import { Spacer } from "../Global/Spacer";
import { PlayButton } from "../Playlist/PlayButton";

export const YoutubeMusicDetails = ({songs,name}) => {
  const {updateTrack} = useContext(Context)
  async function AddToPlayer(){
    const ForMusicPlayer = []
    songs?.map((e,i)=>{
        ForMusicPlayer.push({
          url:e?.url,
          title:FormatTitleAndArtist(e?.title),
          artist:FormatTitleAndArtist(e?.artist),
          artwork:e?.image,
          image:e?.image,
          duration:e?.duration,
          id:e?.id,
          isYoutubeMusic:true,
          streamURL:e?.url,
        })
    })
    await AddPlaylist(ForMusicPlayer)
    updateTrack()
  }
  const theme = useTheme()
  const width = Dimensions.get('window').width
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(44,44,44,0)', 'rgb(18,18,18)', theme.colors.background]} style={{
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
          <View style={{flexDirection:"row",gap:5}}>
            <Ionicons name={"musical-note"} size={16}/>
            <SmallText text={"Your youtube playlist"}/>
          </View>
          <Spacer/>
        </View>
        <PlayButton Loading={false} onPress={()=>{
            AddToPlayer()
        }}/>
    </LinearGradient>
  );
};
