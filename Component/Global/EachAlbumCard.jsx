import { ImageBackground, View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";


export const EachAlbumCard = ({image,name,artists,id}) => {
  let artistsNames = ""
  artists.map((e,i)=>{
    if (i === artists.length - 1){
      artistsNames += e.name
    } else {
      const additionName = e.name + ", "
      artistsNames += additionName
    }
  })
  return (
    <View style={{
      borderRadius:10,
      height:230,
      width:230,
      backgroundColor:"rgba(55,55,79,0)",
      marginRight:10,
      flexDirection:"row",
      overflow:"hidden",
    }}>
    <ImageBackground source={{
      uri:image,
    }} style={{
      height:"100%",
      width:'100%',
    }}>
      <View style={{
        width:"100%",
        height:"100%",
        justifyContent:"flex-end",
      }}>
        <View style={{
          backgroundColor:"rgba(0,0,0,0.73)",
          padding:10,
        }}>
          <PlainText text={name}/>
          <SmallText text={artistsNames}/>
        </View>
      </View>
    </ImageBackground>
    </View>
  );
};
