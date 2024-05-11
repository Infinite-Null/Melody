import { Dimensions, View } from "react-native";
import { Heading } from "../Global/Heading";
import { Spacer } from "../Global/Spacer";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { AddPlaylist, getIndexQuality } from "../../MusicPlayerFunctions";
import { useContext } from "react";
import Context from "../../Context/Context";
import { PlayButton } from "../Playlist/PlayButton";



export const LikedDetails = ({name, Data, dontShowPlayButton}) => {
  const {updateTrack} = useContext(Context)
  async function AddToPlayer(){
    const quality = await getIndexQuality()
    const ForPlayer = []
    Data.map((e)=>{
      if (e){
        ForPlayer.push({
          url:e?.url[quality].url,
          title:e?.title,
          artist:e?.artist,
          artwork:e.artwork,
          duration:e?.duration,
          id:e?.id,
          language:e?.language,
        })
      }
    })
      await AddPlaylist(ForPlayer)
      updateTrack()
  }
  const theme = useTheme()
  const width = Dimensions.get('window').width
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(44,44,44,0)', 'rgb(21,21,21)', theme.colors.background]} style={{
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
      {!dontShowPlayButton && <PlayButton onPress={() => {
        AddToPlayer();
      }} />}
    </LinearGradient>
  );
};
