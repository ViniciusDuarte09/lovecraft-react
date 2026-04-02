import { useState } from "react";
import { useEffect } from "react";
import { getAllCreatures } from "../services/creaturesService";
import Card from "../components/Card"

function Creatures(){

    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);

 
  if(loading) return (<p>Carregando</p>)
  if(error) return (<p>{error?.message ?? String(error)}</p>)


    return (
        <ul>
            {data.map((card) =>{
                return(
                    <li>
                        <Card creatureData={card} key={card.id}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default Creatures