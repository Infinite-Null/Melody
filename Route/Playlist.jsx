import { MainWrapper } from "../Layout/MainWrapper";
import { Dimensions, ScrollView, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "../Component/Global/PlainText";
import { SmallText } from "../Component/Global/SmallText";
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";

export const Playlist = () => {
  const ImageHeight = Dimensions.get('window').width*0.5;
  const theme = useTheme()
  const AnimatedRef = useAnimatedRef()
  const ScrollOffset = useScrollViewOffset(AnimatedRef)
  const AnimatedImageStyle = useAnimatedStyle(()=>{
    return { transform:[{
      translateY:interpolate(ScrollOffset.value,[-ImageHeight,0,ImageHeight],[-ImageHeight/2,0,ImageHeight*1.2]),
      },
        {
          scale:interpolate(ScrollOffset.value,[-ImageHeight,0,ImageHeight],[-ImageHeight/2,1,0]),
        },
      ]}
  })
  return (
    <MainWrapper>
      <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef}>
        <View style={{
          alignItems:"center",
          justifyContent:"center",
          paddingTop:20
        }}>
          <Animated.Image source={{
            uri:"https://c.saavncdn.com/editorial/charts_TrendingToday_134351_20230826113717.jpg?bch=1709258401",
          }} style={[{
            height:ImageHeight,
            width: ImageHeight,
            borderRadius:10,
          },AnimatedImageStyle]}/>
        </View>
        <View style={{
          height:6000,
          alignItems:"center",
          backgroundColor:theme.colors.background,
        }}><PlainText text={"Trending Today"}/>
          <SmallText text={"Total 50 Songs and 7,60,843 followers"}/></View>
      </Animated.ScrollView>
    </MainWrapper>
  );
};
