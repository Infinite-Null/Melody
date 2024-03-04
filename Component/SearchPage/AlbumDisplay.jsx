/* eslint-disable keyword-spacing */
import React, { useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import { LoadingComponent } from '../Global/Loading'
import { PlainText } from '../Global/PlainText'
import { SmallText } from '../Global/SmallText'
import { EachAlbumCard } from '../Global/EachAlbumCard'
import { getSearchAlbumData } from '../../Api/Album'

export default function AlbumsDisplay({data, limit, Searchtext}) {
    console.log(data);
  const [Data, setData] = useState(data)
  const totalPages = Math.ceil(Data?.data?.total ?? 1 / limit)
  const [Page, setPage] = useState(1)
  const [Loading, setLoading] = useState(false)
  async function fetchSearchData(text,page){
   if (Page <= totalPages){
   if(Searchtext !== ""){
    try {
        setLoading(true)
        const fetchdata = await getSearchAlbumData(text,page,limit)
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
     {Data?.data?.results?.length !== 0 && <FlatList numColumns={2} keyExtractor={(item, index) => String(index)} onEndReached={()=>{
        setPage(Page + 1)
        fetchSearchData(Searchtext, Page)
      }} contentContainerStyle={{
        paddingBottom:120,
        width:width,
        alignItems:"center",
        gap:15,
      }} data={[...Data?.data?.results ?? [], {LoadingComponent:true}]} renderItem={(item)=>{
        if(item.item.LoadingComponent  === true){
            return <LoadingComponent loading={Loading} height={100}/>
        }else{
            return <EachAlbumCard mainContainerStyle={{width:width*0.45}} image={item?.item?.image[2]?.link ?? ""} artists={item.item.artists} name={item.item.name} id={item.item.id}/>
        }
      }}/>}
      {Data?.data?.results?.length === 0 && <View style={{
        height:400,
        alignItems:"center",
        justifyContent:"center",
      }}>
        <PlainText text={"No Album found!"}/>
        <SmallText text={"Opps!  T_T"}/>
        </View> }
     </>
  )
}
