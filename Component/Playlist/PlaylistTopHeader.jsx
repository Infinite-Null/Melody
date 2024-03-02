import Animated, { interpolate, useAnimatedStyle, useScrollViewOffset } from "react-native-reanimated";
import { Dimensions, View } from "react-native";

export const PlaylistTopHeader = ({AnimatedRef,url}) => {
  const SizeOfSmallImage = Dimensions.get('window').width * 0.5;
  const ScrollOffset = useScrollViewOffset(AnimatedRef)
  const AnimatedImageStyle = useAnimatedStyle(()=>{
    return { transform:[{
        translateY:interpolate(ScrollOffset.value,[-SizeOfSmallImage,0,SizeOfSmallImage],[-SizeOfSmallImage/2,0,SizeOfSmallImage*1.2]),
      },
        {
          scale:interpolate(ScrollOffset.value,[SizeOfSmallImage,0,SizeOfSmallImage],[0,1,0]),
        },
      ]}
  })
  //Animated For Large Image
  const AnimatedImageStyle2 = useAnimatedStyle(()=>{
    return { transform:[{
        translateY:interpolate(ScrollOffset.value,[-SizeOfSmallImage,0,SizeOfSmallImage],[-SizeOfSmallImage/2,0,SizeOfSmallImage*1.2]),
      },
      ]}
  })
  return (
    <View style={{
      alignItems:"center",
      justifyContent:"center",
      height:SizeOfSmallImage * 1.4,
    }}>
      <View style={{
        elevation:10,
      }}>
        <Animated.Image source={{
          uri:url,
        }} style={[{
          height:SizeOfSmallImage,
          width: SizeOfSmallImage,
          borderRadius:10,
        },AnimatedImageStyle]}/>
      </View>
      <Animated.Image blurRadius={10} source={{
        uri:url,
      }} style={[{
        height:SizeOfSmallImage * 2,
        width: "100%",
        position:"absolute",
        zIndex:-1,
      },AnimatedImageStyle2]}/>
      <View style={{
        height:SizeOfSmallImage * 2,
        width: "100%",
        position:"absolute",
        zIndex:-1,
        backgroundColor:"rgba(33,33,33,0.7)",
      }}/>
    </View>
  );
};
