import { SpaceBetween } from "../../Layout/SpaceBetween";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useTheme } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

export const EachCheckBox = ({checkbox1,checkbox2,onCheck1,onCheck2,data}) => {
  return (
    <SpaceBetween style={{
      paddingHorizontal:10,
      justifyContent:"center",
      gap:35,
      marginVertical:10,
    }}>
      <EachCheck name={checkbox1} data={data} onpress={onCheck1}/>
      <EachCheck name={checkbox2} data={data} onpress={onCheck2}/>
    </SpaceBetween>
  );
};
function EachCheck({name, onpress, data}){
  const theme = useTheme()
  return <Animated.View entering={FadeInDown.delay(100)} style={{
    alignItems:"flex-start",
    width:100,
  }}><BouncyCheckbox
    size={25}
    fillColor={theme.colors.primary}
    unfillColor="#FFFFFF"
    text={name}
    iconStyle={{ borderColor: "red" }}
    innerIconStyle={{ borderWidth: 2 }}
    textStyle={{ fontFamily: "JosefinSans-Regular", color:"white" }}
    onPress={(isChecked)=>{
      if (isChecked){
        data.push(name.toLowerCase())
      } else {
        const index = data.indexOf(name.toLowerCase());
        if (index > -1) {
          data.splice(index, 1);
        }

      }
      onpress(data)
    }}
  /></Animated.View>
}
