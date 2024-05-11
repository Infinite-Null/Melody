import { useEffect, useState } from "react";
import { GetUserNameValue } from "../LocalStorage/StoreUserName";

export const useGetUserName = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userNameValue, setUserName] = useState("");
  async function getUserNameLocalStorage(){
    const name = await GetUserNameValue()
    setUserName(FormatName(name))
  }
  function FormatName(name){
    const nameArray = name.split(" ")
    name = nameArray[0]
    if (name.length >= 10){
      return name.slice(0,9) + ".."
    } else {
      return name
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getUserNameLocalStorage()
  }, []);
  return userNameValue;
};
