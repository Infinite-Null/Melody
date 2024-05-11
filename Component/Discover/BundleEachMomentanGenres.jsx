import { View } from "react-native";
import { EachMomentsandGenres } from "./EachMomentsandGenres";

export const BundleEachMomentanGenres = ({list, color}) => {
  return (
    <View style={{gap:10}}>
      {list.map((e,i)=> <EachMomentsandGenres text={e} key={i} color={color[i]} showLeftColor={true}/>)}
    </View>
  );
};
