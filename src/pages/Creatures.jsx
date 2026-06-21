import { useState } from "react";
import { useEffect } from "react";
import { getAllCreatures } from "../services/creaturesService";
import Card from "../components/Card"

import styles from "./Creatures.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"

function Creatures(){

    //Estados dos dados
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[expandadId, setExpandedId] = useState(null)

    //Puxa os dados da API
    useEffect(() => {
        async function loadCreatures(){
            try{
                //Usa a Service criada para pegar TODOS os dados
                const data = await getAllCreatures();
                setData(data);
            } catch (err){
                //Exibe uma menssagem de erro caso falhe
                setError("Erro ao carregar criaturas: " + err)
            } finally{
                //Por ser uma função assíncrona, ao terminar, tira a tela de loading
                setLoading(false);
            }
        }

        loadCreatures();
    }, [])

    //Estados dos Filtros
    const[filteredData, setFilteredData] = useState(null);
    const[search, setSearch] = useState(null);
    const[selectedCategoy, setSelectedCategory] = useState(null);

    //Função que altera o ID do Card expandido
    //Basicamente, isto é exevutado quando um card é clicado
    function handleToggle(id){
        //Arrow Function que confere se o ID presente em Expande ID é igual ao ID passado
        // Se for, coloca nulo (Colapsando o card), se não for, coloca o ID (Expandindo o Card)
        setExpandedId((prev) => prev === id ? null : id)
    }
    
    if(loading) {
        return (
            <div className={styles.loading_countainer}>
                <p className={styles.loading_text}>Consultando o Necronomicon...</p>
                <FontAwesomeIcon icon={faCircleNotch} className={styles.faCircleNotch}/>
            </div>
        )
    }
    if(error) return (<p>{error?.message ?? String(error)}</p>)

    return (
        <ul>
            {data.map((card) =>{
                return(
                    <li>
                        <Card creatureData={card} key={card.id} isExpanded={expandadId === card.id} onToggle={() => handleToggle(card.id)}/>
                    </li>
                )
            })}
        </ul>

        // <div>
        //     <Card creatureData={data[0]} isExpanded={expandadId === data[0].id} onToggle={() => handleToggle(data[0].id)}/>
        //     <Card creatureData={data[1]} isExpanded={expandadId === data[1].id} onToggle={() => handleToggle(data[1].id)}/>
        // </div>
    )
}

export default Creatures