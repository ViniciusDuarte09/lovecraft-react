import { useState } from "react";
import { useEffect } from "react";
import { getAllCreatures } from "../services/creaturesService";
import Card from "../components/Card"

function Creatures(){

    const[data, setData] = useState(null);
    const[filteredData, setFilteredData] = useState(null);
    const[search, setSearch] = useState(null);
    const[selectedCategoy, setSelectedCategory] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        async function loadCreatures(){
            try{
                const data = await getAllCreatures();
                setData(data);
            } catch (err){
                setError("Erro ao carregar criaturas: " + err)
            } finally{
                setLoading(false);
            }
        }

        loadCreatures();
    }, [])
    
    if(loading) return (<p>Carregando</p>)
    if(error) return (<p>{error?.message ?? String(error)}</p>)

    return (
        // <ul>
        //     {data.map((card) =>{
        //         return(
        //             <li>
        //                 <Card creatureData={card} key={card.id}/>
        //             </li>
        //         )
        //     })}
        // </ul>

        <div>
            <Card creatureData={data[0]}/>
            <Card creatureData={data[1]}/>
        </div>
    )
}

export default Creatures