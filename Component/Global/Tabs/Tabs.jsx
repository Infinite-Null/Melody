import {View} from "react-native";
import EachTabs from "./EachTabs";
import {memo} from "react";

 function Tabs({tabs,state,setState}) {
   return <View style={{flexDirection:'row', flexWrap:"wrap", gap:0, paddingHorizontal:2}}>
      {tabs.map((e,i)=>{
         if(state === i) return <EachTabs index={i} item={e} isActive={true} setActive={setState} key={i}/>
         else return <EachTabs index={i} item={e} isActive={false} setActive={setState} key={i}/>
      })}
   </View>
}
export default memo(Tabs)
