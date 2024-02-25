import { View } from "react-native";

export const Spacer = ({height}) => {
  if (height === undefined || height === null) {
    return (
      <View style={{
        height: 10,
      }}/>
    )
  }
  else {
    return (
      <View style={{height:height}}/>
    )
  }
}
