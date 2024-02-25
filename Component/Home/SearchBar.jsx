import { TextInput, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export const SearchBar = () => {
  return (
    <View style={{
      backgroundColor:"rgb(56,58,61)",
      borderRadius:10,
      padding:5,
      elevation:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    }}>
      <TextInput placeholder={"Search for any song"}/>
      <View style={{
        padding:10,
      }}>
        <AntDesign name={"search1"} size={20}/>
      </View>
    </View>
  );
};
