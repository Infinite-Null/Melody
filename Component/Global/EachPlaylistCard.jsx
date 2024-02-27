import { Image, View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const EachPlaylistCard = () => {
  return (
    <View style={{
      borderRadius:10,
      overflow:"hidden",
      width:220,
      height:270,
      backgroundColor:"rgb(55,55,79)",
      padding:10,
      elevation:3,
    }}>
      <Image source={{
        uri:"https://c.saavncdn.com/editorial/MostSearchedSongsEnglish_20240108090530.jpg",
      }} style={{
        height:200,
        width:"100%",
        borderRadius:10,
      }}/>
        <SpaceBetween style={{
          height:50,
        }}>
          <View >
            <PlainText text={"Most Searched Song"}/>
            <SmallText text={"12.3k follower"}/>
          </View>
          <FontAwesome5 name={"play"} size={15}/>
        </SpaceBetween>
    </View>
  );
};
