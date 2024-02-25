import { Image, Pressable, Text} from "react-native";

export const SmallBentooCard = ({width , image , text, backgroundColor}) => {
  return (
    <Pressable style={{
      width:width,
      height:170,
      backgroundColor:backgroundColor,
      objectFit:"cover",
      borderRadius:10,
      elevation:10,
      overflow:"hidden",
    }}>
      <Image source={image} style={{
        height:"100%",
        width:"100%",
      }}/>
      <Text style={{
        textAlign:"center",
        backgroundColor:"rgba(0,0,0,0.63)",
        position:"absolute",
        bottom:0,
        width:"100%",
        fontSize:20,
        padding:5,
        fontWeight:"bold",
      }}>{text}</Text>
    </Pressable>
  );
};
