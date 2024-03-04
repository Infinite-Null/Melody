import { View } from "react-native"
import FastImage from 'react-native-fast-image'
export const LoadingComponent = ({loading,height}) => {
  return (
      <>
        {loading && <View style={{
          alignItems:"center",
          justifyContent:"center",
          height:height ? height : "100%",
        }}>
          <FastImage source={require("../../Images/loading.gif")} style={{
            height:80,
            width:80,
          }}/>
        </View>}
      </>
  );
};
