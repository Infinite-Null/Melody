/* eslint-disable keyword-spacing */
import React, { useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import { EachSongCard } from '../Global/EachSongCard'
import { getSearchSongData } from '../../Api/Songs'
import { LoadingComponent } from '../Global/Loading'
import { PlainText } from '../Global/PlainText'
import { SmallText } from '../Global/SmallText'

export default function SongDisplay({data, limit, Searchtext}) {
  const [Data, setData] = useState(data)
  const totalPages = Math.ceil(Data?.data?.total ?? 1 / limit)
  const [Page, setPage] = useState(1)
  const [Loading, setLoading] = useState(false)
  async function fetchSearchData(text,page){
   if (Page <= totalPages){
   if(Searchtext !== ""){
    try {
        setLoading(true)
        const fetchdata = await getSearchSongData(text,page,limit)
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

  function FormatArtist(data){
    let artist = ""
    data?.map((e,i)=>{
      if(i === data.length - 1){
        artist += e.name
      }else{
        artist += e.name + ", "
      }
    })
    return artist
  }
  return (
     <View>
      {Data?.data?.results?.length !== 0 && <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item, index) => String(index)} onEndReached={()=>{
        setTimeout(()=>{
          setPage(Page + 1)
          fetchSearchData(Searchtext, Page)
        },200)
      }} contentContainerStyle={{
        paddingBottom:220,
      }} data={[...Data?.data?.results ?? [], {LoadingComponent:true}]} renderItem={(item)=>{
        if(item.item.LoadingComponent  === true){
            return <LoadingComponent loading={Loading} height={100}/>
        }else{
            return <EachSongCard  artistID={item.item?.primaryArtistsId} language={item.item?.language} duration={item.item?.duration} image={item?.item?.image[2]?.url ?? ""} id={item.item?.id} width={width * 0.95} title={item.item?.name} artist={FormatArtist(item.item?.artists?.primary)} url={item.item?.downloadUrl} style={{
                marginBottom:13,
            }}/>
        }
      }}/>}
      {Data?.data?.results?.length === 0 && <View style={{
        height:400,
        alignItems:"center",
        justifyContent:"center",
      }}>
        <PlainText text={"No Song found!"}/>
        <SmallText text={"Opps!  T_T"}/>
        </View> }
     </View>
  )
}
