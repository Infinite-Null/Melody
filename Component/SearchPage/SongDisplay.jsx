import React from 'react'
import { FlatList, View } from 'react-native'
import { EachSongCard } from '../Global/EachSongCard'
import { PlainText } from '../Global/PlainText'
import { SmallText } from '../Global/SmallText'

export default function SongDisplay({Data}) {
  return (
     <View>
      {Data?.length !== 0 && <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item, index) => String(index)} contentContainerStyle={{
        paddingBottom:220,
      }} data={Data} renderItem={({ item })=>{
            return <EachSongCard title={item?.name}
                                 isYoutubeMusic={true}
                                  id={item?.videoId}
                                  thumbnail={item?.thumbnails[1].url}
                                  artists={item?.artist?.name}
                                  duration={item?.duration}
            />
      }}/>}
      {Data?.length === 0 && <View style={{
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
