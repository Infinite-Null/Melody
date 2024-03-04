/* eslint-disable keyword-spacing */
import React, { useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import { getSearchSongData } from '../../Api/Songs'
import { LoadingComponent } from '../Global/Loading'
import { EachPlaylistCard } from '../Global/EachPlaylistCard'

export default function PlaylistDisplay({data, limit, Searchtext}) {
  const [Data, setData] = useState(data)
  const totalPages = Math.ceil(Data?.data?.total ?? 1 / limit)
  const [Page, setPage] = useState(1)
  const [Loading, setLoading] = useState(false)
  async function fetchSearchData(text,page){
    console.log(totalPages);
   if (Page <= totalPages){
   if(Searchtext !== ""){
    try {
        setLoading(true)
        const fetchdata = await getSearchSongData(text,page,limit)
        const temp = Data
        const finalData = [...temp.data.results,...fetchdata.data.results]
        temp.data.results = finalData
        console.log(temp);
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
     <View>
      <FlatList numColumns={2} keyExtractor={(item, index) => String(index)} onEndReached={()=>{
        setPage(Page + 1)
        fetchSearchData(Searchtext, Page)
      }} contentContainerStyle={{
        paddingBottom:120,
        width:width,
        alignItems:"center",
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
                height:width * 0.65,
            }}
            ImageStyle={{
                height:"60%",
            }}
            />
        }
      }}/>
     </View>
  )
}
