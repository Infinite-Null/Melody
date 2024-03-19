import { EachLanguageCard } from "./EachLanguageCard";
import { View } from "react-native";

export const BundleEachLanguage = ({languages}) => {
  return (
    <View style={{gap:10}}>
      {languages.map((e,i)=> <EachLanguageCard language={e} key={i}/>)}
    </View>
  );
};
