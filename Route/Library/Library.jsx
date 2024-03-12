import { MainWrapper } from "../../Layout/MainWrapper";
import { LibraryRouteHeading } from "../../Component/Library/LibraryTopHeader";
import { EachLibraryCard } from "../../Component/Library/EachLibraryCard";
import { Dimensions, ScrollView, View } from "react-native";


export const Library = () => {
  const width = Dimensions.get("window").width
  return (
    <MainWrapper>
          <LibraryRouteHeading text={"Library"}/>
      <ScrollView>
        <View style={{flexWrap:'wrap', flexDirection:"row", width:width, justifyContent:"space-evenly"}}>
          <EachLibraryCard text={"Liked Songs"} image={require("../../Images/LikedSong.png")}/>
          <EachLibraryCard text={"Liked Playlists"} image={require("../../Images/LikedPlaylist.png")}/>
          <EachLibraryCard text={"Liked Albums"} image={require("../../Images/LikedAlbum.png")}/>
          <View style={{width: width * 0.45}}/>
        </View>
      </ScrollView>
    </MainWrapper>
  );
};
