/* eslint-disable keyword-spacing */
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { LoadingComponent } from "../Global/Loading";
import { EachPlaylistCard } from "../Global/EachPlaylistCard";
import { PlainText } from "../Global/PlainText";
import { SmallText } from "../Global/SmallText";
import { getSearchPlaylistData } from "../../Api/Playlist";
import { Heading } from "../Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";

export default function ShowPlaylistofType({route}) {
  const {Searchtext} = route.params
  const limit = 30
  const [Data, setData] = useState({})
  const [Loading, setLoading] = useState(false)
  async function addSearchData(){
      if(Searchtext !== ""){
        try {
          setLoading(true)
          const fetchdata = await getSearchPlaylistData(Searchtext,1,limit)
          setData(fetchdata)
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false)
        }
      }
  }

  useEffect(() => {
    addSearchData()
  }, []);

  const width = Dimensions.get("window").width
  return (
    <>
      <PaddingConatiner>
        <Heading text={Searchtext.toUpperCase()}/>
      </PaddingConatiner>
      {Loading && <LoadingComponent loading={true}/>}
      {!Loading && <>
        {Data?.data?.results?.length !== 0 && <FlatList showsVerticalScrollIndicator={false} numColumns={2} keyExtractor={(item, index) => String(index)} contentContainerStyle={{
          paddingBottom:100,
          alignItems:"flex-start",
        }} data={Data?.data?.results} renderItem={(item)=>{
          return <EachPlaylistCard
            name={item.item.name}
            follower={"Total " + item.item.songCount + " Songs"}
            key={item.index}
            image={item.item.image[2].link}
            id={item.item.id}
            MainContainerStyle = {{
              width:width * 0.45,
              marginHorizontal:10,
            }}
            ImageStyle={{
              height:"70%",
            }}
          />
        }
        }/>}
        {Data?.data?.results?.length === 0 && <View style={{
          height:400,
          alignItems:"center",
          justifyContent:"center",
        }}>
          <PlainText text={"No Playlist found!"}/>
          <SmallText text={"Opps!  T_T"}/>
        </View> }
      </>}
    </>
  )
}
