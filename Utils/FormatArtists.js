export default function FormatArtist(data){
  let artist = ""
  data?.map((e,i)=>{
    if (i === data.length - 1){
      artist += e.name
    } else {
      artist += e.name + ", "
    }
  })
  return artist
}
