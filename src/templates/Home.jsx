import React from "react";
import { getUsersId } from "../reducks/users/selector";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUsersId(selector)

  return(
   <div>
     <h2>Home</h2>
     <p>{uid}</p>
   </div>
  )
}

export default Home