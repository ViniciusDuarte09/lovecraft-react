import { useEffect, useState } from "react"
import { getAllCreatures } from "../services/creaturesService";

export default function Card({creatureData, isExpanded}){
  
  const[expanded, setExpanded] = useState(false);
  const[data, setData] = useState(creatureData);

  return(
    <div style={{border: "3px solid pink", height: "150px", width: "200px"}}>
      <h1>{data?.name}</h1>
      <img src={data?.img[0]} alt={data?.name} style={{height: "100px"}}/>

    </div>
  )

}