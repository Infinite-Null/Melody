export default function FormatTitleAndArtist(data){
  return data?.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™")
}
