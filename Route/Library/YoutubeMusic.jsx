import { Dimensions, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Animated, { ZoomIn, ZoomInUp, ZoomOut } from "react-native-reanimated";
import { Heading } from "../../Component/Global/Heading";
import { PlainText } from "../../Component/Global/PlainText";

export const YoutubeMusic = () => {
  const { height } = Dimensions.get('window')
  return (
    <View style={{
      paddingHorizontal: 10,
    }}>
      <Heading text={"Your Playlists"}/>
      <PlainText text={"To add press add button and provide youtube playlist url"} style={{
        width: '70%',
      }}/>
     <Animated.View entering={ZoomIn} exiting={ZoomOut} style={{
       position: 'absolute',
       top: height - 260,
       right: 20,
     }}>
       <TouchableOpacity
         style={{
           borderWidth: 1,
           borderColor: 'rgba(0,0,0,0.2)',
           alignItems: 'center',
           justifyContent: 'center',
           width: 70,
           height: 70,
           backgroundColor: '#fff',
           borderRadius: 100,
         }}
       >
         <Ionicons name={'add'} size={30} color={'black'}/>
       </TouchableOpacity>
     </Animated.View>
    </View>
  );
};
