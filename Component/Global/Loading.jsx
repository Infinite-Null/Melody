import { View } from "react-native"
import FastImage from 'react-native-fast-image'
export const Loading = ({loading}) => {
  return (
      <View style={{
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
      }}>
        <FastImage source={require("../../Images/loading.gif")} style={{
          height:80,
          width:80,
        }}/>
      </View>
  );
};
