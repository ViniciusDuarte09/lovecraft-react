import { useState } from "react"

export default function Card({creatureData, isExpanded, onToggle}){

  //Layout padrão do Card, exibido caso não seja selecionado
  function CollapsedLayout(){
    return(
      <div style={{border: "3px solid pink", height: "150px", width: "200px"}}>
        <h1>{creatureData?.name}</h1>
        <img src={creatureData?.img[0]} alt={creatureData?.name} style={{height: "100px"}}/>
      </div>  
    )
  }
  
  //Layout Expandido do Card, exibe mais informações em um disposição diferente
  function ExpandedLayout(){
    return(
        <div style={{border: "3px solid blue", height: "150px", width: "200px"}}>
        <h1>{creatureData?.name}</h1>
        <img src={creatureData?.img[0]} alt={creatureData?.name} style={{height: "100px"}}/>
        <p>{creatureData?.overview}</p>
      </div>  
    )
  }

  //Escolhe o layout com base na interação do usuário
  return (
    //Confere se o componente foi clicado e executa a "função toggle", criada na Página e que muda o ID expandido
    <div onClick={onToggle}>
      {isExpanded ? <ExpandedLayout/> : <CollapsedLayout/>}
    </div>
  )

}