import { TrendingSongLayout } from "../../Layout/TrendingSongLayout";
import { EachSongCard } from "./EachSongCard";
import { Dimensions, ScrollView } from "react-native";

export const HorizontalScrollSongs = ({songs}) => {
  const width = Dimensions.get("window").width

  return ( <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
    paddingRight:50,
    }}>
      <TrendingSongLayout>
        {songs.slice(0,4).map((e,i)=><EachSongCard image={e.image} artist={e.artist} title={e.song} width={width * 0.7} key={i}/>)}
      </TrendingSongLayout>
      <TrendingSongLayout>
        {songs.slice(4,8).map((e,i)=><EachSongCard image={e.image} artist={e.artist} title={e.song} width={width * 0.7} key={i}/>)}
      </TrendingSongLayout>
    </ScrollView>
  );
};
