import { EachPlaylistCard } from "../Global/EachPlaylistCard";
import { View } from "react-native";

export const RenderTopCharts = ({playlist}) => {
  const data = []
  for (let i = 0; i < playlist.length; i = i + 2){
    if (i === playlist.length - 1 && playlist.length % 2 !== 0){
      data.push([playlist[i]])
    }
    else {
      data.push([playlist[i],playlist[i + 1]])
    }
  }
  return (
    <>
      {data.map((e,i)=><View style={{
        gap:15,
      }}>
        {/* eslint-disable-next-line no-shadow */}
        {e.map((e,index) => <View style={{
          marginRight:15,
        }}>
          <EachPlaylistCard image={e.image[2].link} name={e.title} follower={e.subtitle} key={i+index} id={e.id}/>
        </View>)}
      </View>)}
    </>
  );
};
