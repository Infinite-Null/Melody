import { Dimensions, PermissionsAndroid, Platform, Pressable, ToastAndroid, View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";
import { PlayOneSong } from "../../MusicPlayerFunctions";
import { memo, useContext } from "react";
import Context from "../../Context/Context";
import { useActiveTrack, usePlaybackState } from "react-native-track-player";
import AntDesign from "react-native-vector-icons/AntDesign";
import DeviceInfo from "react-native-device-info";
import ReactNativeBlobUtil from "react-native-blob-util";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";

export const EachSongCard = memo(function EachSongCard({title,artist,image,id,url,duration,language,artistID,isLibraryLiked}) {
  const actualDownload = () => {
    let dirs = ReactNativeBlobUtil.fs.dirs
    ToastAndroid.showWithGravity(
      `Download Started`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    ReactNativeBlobUtil
      .config({
        addAndroidDownloads:{
          useDownloadManager:true,
          path:dirs.LegacyMusicDir + `/Melody/${FormatTitleAndArtist(title)}.m4a`,
          notification:true,
          title:`${FormatTitleAndArtist(title)}`,
        },
        fileCache: true,
      })
      .fetch('GET', url[4].url, {
      })
      .then((res) => {
        console.log('The file saved to ', res.path())
        ToastAndroid.showWithGravity(
          "Download successfully Completed",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      })
  }
  const getPermission = async () => {
    if (Platform.OS === 'ios') {
      actualDownload();
    } else {
      try {
        let deviceVersion = DeviceInfo.getSystemVersion();
        let granted = PermissionsAndroid.RESULTS.DENIED;
        if (deviceVersion >= 13) {
          granted = PermissionsAndroid.RESULTS.GRANTED;
        } else {
          granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          );
        }
        console.log(granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            actualDownload();
          } else {
            console.log("please grant permission");
          }
      } catch (err) {
        console.log("display error",err)    }
    }
  };
  const width1 = Dimensions.get("window").width;
  const {updateTrack} = useContext(Context)
  const currentPlaying = useActiveTrack()
  const playerState = usePlaybackState()
  return (
    <View style={{
      flexDirection:'row',
      width:width1,
      marginRight:20,
      alignItems:"center",
      paddingRight:20,
      // backgroundColor:"red"
    }}>
      <Pressable onPress={()=>{
        const song  = {
          url:isLibraryLiked ? url : url[4].url,
          title:FormatTitleAndArtist(title),
          artist:FormatTitleAndArtist(artist),
          artwork:image,
          duration,
          id,
          language,
          artistID:artistID,
          image:image,
        }
        PlayOneSong(song)
        updateTrack()
      }} style={{
        flexDirection:'row',
        gap:10,
        alignItems:"center",
        maxHeight:60,
        elevation:10,
        marginBottom:6,
        flex:1,
      }}>
        <FastImage source={((id === currentPlaying?.id ?? "") && playerState.state === "playing") ? require("../../Images/playing.gif") : ((id === currentPlaying?.id ?? "") && playerState.state !== "playing" ) ? require("../../Images/songPaused.gif") : {
          uri:image,
        }} style={{
          height:50,
          width:50,
          borderRadius:10,
        }}/>
        <View style={{
          flex:1,
        }}>
          <PlainText text={title?.toString()?.replaceAll("&quot;","\"")?.replaceAll("&amp;","and")?.replaceAll("&#039;","'")?.replaceAll("&trade;","™")} style={{width: width1 * 0.7}}/>
          <SmallText text={artist?.toString()?.replaceAll("&quot;","\"")?.replaceAll("&amp;","and")?.replaceAll("&#039;","'")?.replaceAll("&trade;","™")} style={{width: width1 * 0.7}}/>
        </View>
      </Pressable>
      <Pressable onPress={()=>{
        getPermission()
      }} style={{
        padding:10,
        backgroundColor:"rgb(28,28,28)",
        borderRadius:100,
      }}>
        <AntDesign name={"download"} size={17}/>
      </Pressable>
    </View>
  );
})
