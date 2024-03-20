/* eslint-disable keyword-spacing */
import React, { useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import { LoadingComponent } from '../Global/Loading'
import { EachPlaylistCard } from '../Global/EachPlaylistCard'
import { PlainText } from '../Global/PlainText'
import { SmallText } from '../Global/SmallText'
import { getSearchPlaylistData } from '../../Api/Playlist'

export default function PlaylistDisplay({data, limit, Searchtext}) {
  const [Data, setData] = useState(data)
  const totalPages = Math.ceil(Data?.data?.total ?? 1 / limit)
  const [Page, setPage] = useState(1)
  const [Loading, setLoading] = useState(false)
  async function fetchSearchData(text,page){
   if (Page <= totalPages){
   if(Searchtext !== ""){
    try {
        setLoading(true)
        const fetchdata = await getSearchPlaylistData(text,page,limit)
        const temp = Data
        const finalData = [...temp.data.results,...fetchdata.data.results]
        temp.data.results = finalData
        setData(temp)
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false)
      }
   }
   }
  }

  const width = Dimensions.get("window").width
  return (
     <>
     {Data?.data?.results?.length !== 0 && <FlatList showsVerticalScrollIndicator={false} numColumns={2} keyExtractor={(item, index) => String(index)} onEndReached={()=>{
       setTimeout(()=>{
         setPage(Page + 1)
         fetchSearchData(Searchtext, Page)
       },200)
      }} contentContainerStyle={{
         paddingBottom:220,
        alignItems:"flex-start",
      }} data={[...Data?.data?.results ?? [], {LoadingComponent:true}]} renderItem={(item)=>{
        if(item.item.LoadingComponent  === true){
            return <LoadingComponent loading={Loading} height={100}/>
        }else{
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
      }}/>}
      {Data?.data?.results?.length === 0 && <View style={{
        height:400,
        alignItems:"center",
        justifyContent:"center",
      }}>
        <PlainText text={"No Playlist found!"}/>
        <SmallText text={"Opps!  T_T"}/>
        </View> }
     </>
  )
}
