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
          <EachLibraryCard/>
          <EachLibraryCard/>
          <EachLibraryCard/>
          <EachLibraryCard/>
        </View>
      </ScrollView>
    </MainWrapper>
  );
};
