import { Image, Pressable, Text} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const SmallBentooCard = ({width , image , text}) => {
  return (
    <Pressable style={{
      height:170,
      borderRadius:10,
      elevation:10,
      overflow:"hidden",
    }}>
      <Image source={image} style={{
        width:width,
        height:170,
      }}/>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(120,120,120,0)', 'rgba(0,0,0,0.56)', 'rgb(0,0,0)']} style={{
        position:"absolute",
        bottom:0,
        width:"100%",
      }}>
        <Text style={{
          textAlign:"center",
          fontSize:20,
          padding:5,
          fontWeight:"bold",
        }}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};
