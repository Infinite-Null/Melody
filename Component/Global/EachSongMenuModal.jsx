import Modal from "react-native-modal";
import { Dimensions, PermissionsAndroid, Platform, Pressable, ToastAndroid, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import React, { useContext, useEffect, useState } from "react";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";
import { Spacer } from "./Spacer";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ReactNativeBlobUtil from "react-native-blob-util";
import { GetDownloadPath } from "../../LocalStorage/AppSettings";
import DeviceInfo from "react-native-device-info";
import { AddSongsToQueue} from "../../MusicPlayerFunctions";
import Context from "../../Context/Context";
import { getYoutubeMusicStreamUrl } from "../../Api/YoutubeMusic/Song";

export const EachSongMenuModal = ({Visible, setVisible}) => {
  const {updateTrack} = useContext(Context)
  const [Loading, setLoading] = useState(Visible.isYoutubeMusic);
  const [DownloadUrl, setDownloadUrl] = useState("");

  async function actualDownload () {
    let dirs = ReactNativeBlobUtil.fs.dirs
    const download = Visible.isYoutubeMusic ? DownloadUrl : Visible.url
    const path = await GetDownloadPath()
    ToastAndroid.showWithGravity(
      `Download Started`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    ReactNativeBlobUtil
      .config({
        addAndroidDownloads:{
          useDownloadManager:true,
          path:(path === "Downloads") ? dirs.LegacyDownloadDir + `/Melody/${FormatTitleAndArtist(Visible.title)}.m4a` : dirs.LegacyMusicDir + `/Melody/${FormatTitleAndArtist(Visible.title)}.m4a`,
          notification:true,
          title:`${FormatTitleAndArtist(Visible.title)}`,
        },
        fileCache: true,
      })
      .fetch('GET', download, {
      })
      .then((res) => {
        console.log('The file saved to ', res.path())
        ToastAndroid.showWithGravity(
          "Download successfully Completed",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }).catch((e)=>{
      console.log(e);
    })
    setVisible({visible: false})
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
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          actualDownload();
        } else {
          console.log("please grant permission");
        }
      } catch (err) {
        console.log("display error",err)    }
    }
  };
  async function addSongToQueue(){
    const song  = {
      url: Visible.url,
      title:FormatTitleAndArtist(Visible.title),
      artist:FormatTitleAndArtist(Visible.artist),
      artwork:Visible.image,
      duration:Visible.duration,
      id:Visible.id,
      language:Visible.language,
      image:Visible.image,
      downloadUrl:Visible.url,
    }
   await AddSongsToQueue([song])
    updateTrack()
    setVisible({visible: false})
    ToastAndroid.showWithGravity(
      `Song Added To Queue`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }
  const size = Dimensions.get("window").height
  async function getStreamingLink () {
    try {
      setLoading(true)
      const streamLink = await getYoutubeMusicStreamUrl(Visible.id)
      setDownloadUrl(streamLink.url)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (Visible.isYoutubeMusic){
      getStreamingLink()
    }
  }, [Visible]);
  return (
    <Modal onBackButtonPress={()=>setVisible({visible: false})} onSwipeComplete={()=>setVisible({visible: false})} onBackdropPress={()=>setVisible({visible: false})} swipeDirection={['up', 'left', 'right', 'down']} isVisible={Visible.visible} style={{
      justifyContent: 'flex-end',
      margin: 0,
    }}>
      <View style={{
        backgroundColor:"rgb(18,18,18)",
        elevation:10,
      }}>
        {Loading &&  <View
          style={{
            flexDirection: 'row',
            justifyContent:"center",
            paddingHorizontal:15,
            paddingTop:5,
            alignItems:"center",
            gap:10,
            height:200,
          }}>
          <FastImage source={require("../../Images/loading.gif")} style={{
            height:80,
            width:80,
          }}/>
        </View>}
        {!Loading && <>
          <Spacer/>
          <View
            style={{
              flexDirection: 'row',
              justifyContent:"space-between",
              paddingHorizontal:15,
              paddingTop:5,
              alignItems:"center",
              gap:10,
            }}>
            <View style={{
              flexDirection:"row",
              flex:1,
            }}>
              <FastImage
                source={{
                  uri: Visible.image ?? "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
                }}
                style={{
                  height: (size *  0.1) - 30,
                  width: (size *  0.1) - 30,
                  borderRadius: 10,
                }}
              />
              <View style={{
                flex:1,
                height:(size *  0.1) - 30,
                alignItems:"flex-start",
                justifyContent:"center",
                paddingHorizontal:10,
              }}>
                <PlainText text={FormatTitleAndArtist(Visible?.title) ?? "No music :("} style={{color:"white"}}/>
                <SmallText text={FormatTitleAndArtist(Visible?.artist) ?? "Explore now!"} maxLine={1}/>
              </View>
            </View>
          </View>
          <Spacer/>
          <View style={{
            flexDirection:"row",
            gap:10,
            paddingHorizontal:10,
          }}>
            <EachModalButton text={"Add to Queue"} icon={<MaterialCommunityIcons name={"playlist-music-outline"} size={25} color={"white"}/>} Onpress={addSongToQueue}/>
            <EachModalButton text={"Download"} Onpress={getPermission} icon={<AntDesign name={"download"} size={25} color={"white"}/>}/>
          </View>
          <Spacer/>
          <Spacer/>
          <Spacer/>
        </>}
      </View>
    </Modal>
  );
};
function EachModalButton({icon,text,Onpress}){
  return  <Pressable onPress={()=>Onpress()} style={{
    height:100,
    backgroundColor:"rgb(41,47,49)",
    borderRadius:10,
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    elevation:5,
  }}>
    {icon}
    <Spacer/>
    <PlainText text={text} style={{color:"white", paddingRight:0}}/>
  </Pressable>
}
