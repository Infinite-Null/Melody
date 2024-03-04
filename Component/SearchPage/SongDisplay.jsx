/* eslint-disable keyword-spacing */
import React, { useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import { EachSongCard } from '../Global/EachSongCard'
import { getSearchSongData } from '../../Api/Songs'
import { LoadingComponent } from '../Global/Loading'

export default function SongDisplay({data, limit, Searchtext}) {
  const [Data, setData] = useState(data)
  const totalPages = Math.ceil(Data?.data?.total ?? 1 / limit)
  const [Page, setPage] = useState(1)
  const [Loading, setLoading] = useState(false)
  async function fetchSearchData(text,page){
    console.log(totalPages);
   if (Page <= totalPages){
    try {
        setLoading(true)
        const fetchdata = await getSearchSongData(text,page,limit)
        console.log(fetchdata);
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
  const width = Dimensions.get("window").width
  return (
     <View>
      <FlatList onEndReached={()=>{
        console.log("dsfjhk");
        setPage(Page + 1)
        fetchSearchData(Searchtext, Page)
      }} contentContainerStyle={{
        paddingBottom:120,
      }} data={[...Data?.data?.results ?? [], {LoadingComponent:true}]} renderItem={(item)=>{
        if(item.item.LoadingComponent  === true){
            return <LoadingComponent loading={Loading} height={100}/>
        }else{
            return <EachSongCard titleWidth={width * 0.63} artistWidth={width * 0.55}  image={item?.item?.image[2]?.link ?? ""} id={item.item.id} width={width * 0.7} title={item.item.name} artist={item.item.primaryArtists} url={item.item.downloadUrl}/>
        }
      }}/>
     </View>
  )
}
