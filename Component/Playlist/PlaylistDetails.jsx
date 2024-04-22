import { Dimensions, View } from "react-native";
import { Heading } from "../Global/Heading";
import { SmallText } from "../Global/SmallText";
import { Spacer } from "../Global/Spacer";
import { PlayButton } from "./PlayButton";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { AddPlaylist, getIndexQuality } from "../../MusicPlayerFunctions";
import { useContext } from "react";
import Context from "../../Context/Context";
import { LikedPlaylist } from "./LikedPlaylist";
import Ionicons from "react-native-vector-icons/Ionicons";
import FormatArtist from "../../Utils/FormatArtists";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";


export const PlaylistDetails = ({name,listener,notReleased,Data, Loading, id, image, follower}) => {
  const {updateTrack} = useContext(Context)
  async function AddToPlayer(){
    const quality = await getIndexQuality()
    const ForMusicPlayer = Data?.data?.songs?.map((e,i)=>{
      return {
        url:e?.downloadUrl[quality].url,
        title:FormatTitleAndArtist(e?.name),
        artist:FormatTitleAndArtist(FormatArtist(e?.artists?.primary)),
        artwork:e?.image[2]?.url,
        image:e?.image[2]?.url,
        duration:e?.duration,
        id:e?.id,
        language:e?.language,
        artistID:e?.primary_artists_id,
      }
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
      {!notReleased && <>
        <View style={{
          paddingLeft:5,
          maxWidth:width * 0.8,
        }}>
          <Heading text={name}/>
          <View style={{flexDirection:"row",gap:5}}>
            <Ionicons name={"musical-note"} size={16}/>
            <SmallText text={listener}/>
          </View>
          <Spacer/>
          <LikedPlaylist id={id} image={image} name={name} follower={follower}/>
        </View>
        <PlayButton Loading={Loading} onPress={()=>{
          if (!Loading){
            AddToPlayer()
          }
        }}/>
      </>}
    </LinearGradient>
  );
};
