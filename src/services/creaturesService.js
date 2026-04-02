import api from "./api";

export async function getAllCreatures(){
  try{
    //Faz a requisição a API e busca do dado de TODAS as criaturas
    const creatureData = await api.get("/creatures");

    //Retorna um objeto com as informções da criatura
    return creatureData.data;

    //Trata se houver algum erro
  } catch(error){
    console.error("Erro ao puxar a informação das criaturas", error);
    throw error;
  }
}