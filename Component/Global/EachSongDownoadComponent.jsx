import AntDesign from "react-native-vector-icons/AntDesign";
import { PermissionsAndroid, Platform, Pressable, ToastAndroid } from "react-native";
import { useTheme } from "@react-navigation/native";
import ReactNativeBlobUtil from "react-native-blob-util";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";
import DeviceInfo from "react-native-device-info";
import { GetDownloadPath } from "../../LocalStorage/AppSettings";

export const EachSongDownoadComponent = ({url,title}) => {
  const theme = useTheme()
  async function actualDownload () {
    let dirs = ReactNativeBlobUtil.fs.dirs
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
          path:(path === "Downloads") ? dirs.LegacyDownloadDir + `/Melody/${FormatTitleAndArtist(title)}.m4a` : dirs.LegacyMusicDir + `/Melody/${FormatTitleAndArtist(title)}.m4a`,
          notification:true,
          title:`${FormatTitleAndArtist(title)}`,
        },
        fileCache: true,
      })
      .fetch('GET', url, {
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
  return (
    <Pressable onPress={()=>{
      getPermission()
    }} style={{
      padding:10,
      backgroundColor:"rgb(28,28,28)",
      borderRadius:100,
    }}>
      <AntDesign name={"download"} size={17} color={theme.colors.text}/>
    </Pressable>
  );
};
