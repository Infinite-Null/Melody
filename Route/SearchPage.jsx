import { MainWrapper } from "../Layout/MainWrapper";
import { SearchBar } from "../Component/Global/SearchBar";
import Tabs from "../Component/Global/Tabs/Tabs";
import { useState } from "react";

export const SearchPage = () => {
  const [ActiveTab, setActiveTab] = useState(0)
  return (
    <MainWrapper>
      <SearchBar onChange={(text)=>console.log(text)}/>
      <Tabs tabs={["All","Songs","Playlists","Albums"]} setState={setActiveTab} state={ActiveTab}/>
    </MainWrapper>
  );
};
