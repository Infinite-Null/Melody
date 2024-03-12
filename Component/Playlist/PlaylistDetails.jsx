import { Dimensions, View } from "react-native";
import { Heading } from "../Global/Heading";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SmallText } from "../Global/SmallText";
import { Spacer } from "../Global/Spacer";
import AntDesign from "react-native-vector-icons/AntDesign";
import { PlayButton } from "./PlayButton";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { AddPlaylist } from "../../MusicPlayerFunctions";
import { useContext } from "react";
import Context from "../../Context/Context";


export const PlaylistDetails = ({name,listener,liked,notReleased,Data,Links}) => {
  const {updateTrack} = useContext(Context)
  const ForMusicPlayer = Data?.songs?.map((e,i)=>{
    return {
      url:Links[i]?.url[4].url,
      title:e?.song.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
      artist:e?.primary_artists.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
      artwork:Links[i]?.image,
      duration:e?.duration,
      id:e?.id,
      language:e?.language,
      artistID:e?.primary_artists_id,
    }
  })
  async function AddToPlayer(){
    await AddPlaylist(ForMusicPlayer)
    updateTrack()
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
      {!notReleased && <>
        <View style={{
          paddingLeft:5,
          maxWidth:width * 0.8,
        }}>
          <Heading text={name}/>
          <View style={{flexDirection:"row",gap:5}}>
             <Ionicons name={"musical-note"} size={16}/>
            <SmallText text={listener + " Listeners"}/>
          </View>
          <Spacer/>
          <AntDesign size={20} name={liked ? "heart" : "hearto"} color={liked ? 'rgb(227,97,97)' : theme.colors.text}/>
        </View>
        <PlayButton onPress={()=>{
          AddToPlayer()
        }}/>
      </>}
    </LinearGradient>
  );
};
