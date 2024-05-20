import { Dimensions, View, Modal, ActivityIndicator } from "react-native";
import Animated, { FadeInDown,} from "react-native-reanimated";
import { PlainText } from "../Global/PlainText";
import { Spacer } from "../Global/Spacer";

export const LoadingModal = ({Show}) => {
  const {width} = Dimensions.get('window')
  return (
    <Modal transparent={true} visible={Show} hardwareAccelerated={true}>
      <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.5)",
      }}>
        <Animated.View entering={FadeInDown.delay(150)} style={{
          backgroundColor:"rgb(18,17,17)",
          padding:20,
          borderRadius:10,
        }}>
          <ActivityIndicator/>
          <Spacer/>
          <PlainText text={"Please wait..."} style={{
            fontSize:width * 0.04,
            color:"white",
          }}/>
        </Animated.View>
      </View>
    </Modal>
  );
};
