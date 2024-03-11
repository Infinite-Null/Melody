import { Dimensions, View } from "react-native";
import { Heading } from "../Global/Heading";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SmallText } from "../Global/SmallText";
import { Spacer } from "../Global/Spacer";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { AddPlaylist } from "../../MusicPlayerFunctions";
import { PlayButton } from "../Playlist/PlayButton";


export const AlbumDetails = ({name,releaseData,liked,Data}) => {
  function FormatArtist(data){
    let artist = ""
    data?.map((e,i)=>{
      if (i === data.length - 1){
        artist += e.name
      } else {
        artist += e.name + ", "
      }
    })
    return artist
  }
  const ForMusicPlayer = Data?.data?.songs?.map((e,i)=>{
    return {
      url:e?.downloadUrl[4].url,
      title:e?.name.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
      artist:FormatArtist(e?.artists?.primary)?.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
      artwork:e?.image[2]?.url,
      duration:e?.duration,
      id:e?.id,
      language:e?.language,
      artistID:e?.primary_artists_id,
    }
  })
  async function AddToPlayer(){
    await AddPlaylist(ForMusicPlayer)
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
          <View style={{flexDirection:"row",gap:5}}>
            <Ionicons name={"musical-note"} size={16}/>
            <SmallText text={"Released in " + releaseData }/>
          </View>
          <Spacer/>
          <AntDesign size={20} name={liked ? "heart" : "hearto"} color={liked ? 'rgb(227,97,97)' : theme.colors.text}/>
        </View>
        <PlayButton onPress={()=>{
          AddToPlayer()
        }}/>
    </LinearGradient>
  );
};
