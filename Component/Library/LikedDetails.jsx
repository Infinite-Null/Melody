import { Dimensions, View } from "react-native";
import { Heading } from "../Global/Heading";
import { Spacer } from "../Global/Spacer";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { AddPlaylist, AddSongsToQueue, getIndexQuality } from "../../MusicPlayerFunctions";
import { useContext } from "react";
import Context from "../../Context/Context";
import { PlayButton } from "../Playlist/PlayButton";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";
import { getYoutubeMusicStreamUrl } from "../../Api/YoutubeMusic/Song";
import TrackPlayer from "react-native-track-player";



export const LikedDetails = ({name, Data, dontShowPlayButton}) => {
  const {updateTrack} = useContext(Context)
  async function AddToPlayer(){
    await TrackPlayer.pause()
    for (let i = 0; i < Data.length; i++){
      if (i === 0){
        let url = Data[i]?.url
        if (Data[i]?.isYoutubeMusic === true){
          const resurl = await getYoutubeMusicStreamUrl(Data[i]?.id)
          url = resurl.url
        }
        const ForMusicPlayer = {
          url:url,
          title:FormatTitleAndArtist(Data[i]?.title),
          artist:FormatTitleAndArtist(Data[i]?.artist),
          artwork:Data[i]?.artwork,
          image:Data[i]?.artwork,
          duration:Data[i]?.duration,
          id:Data[i]?.id,
          isYoutubeMusic:Data[i]?.isYoutubeMusic,
          streamURL:url,
        }
        await TrackPlayer.reset()
        await TrackPlayer.add([ForMusicPlayer]);
        await TrackPlayer.play();
        updateTrack()
      } else {
        let url = Data[i]?.url
        if (Data[i]?.isYoutubeMusic === true){
          const resurl = await getYoutubeMusicStreamUrl(Data[i]?.id)
          url = resurl.url
        }
        const ForMusicPlayer = {
          url:url,
          title:FormatTitleAndArtist(Data[i]?.title),
          artist:FormatTitleAndArtist(Data[i]?.artist),
          artwork:Data[i]?.artwork,
          image:Data[i]?.artwork,
          duration:Data[i]?.duration,
          id:Data[i]?.id,
          isYoutubeMusic:false,
          streamURL:url,
        }
        await AddSongsToQueue(ForMusicPlayer)
        updateTrack()
      }
    }
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
