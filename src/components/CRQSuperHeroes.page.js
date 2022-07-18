import axios from 'axios';
import React from 'react'
import {useQuery} from "react-query";
import { useSuperHeroData } from '../hooks/useSuperHeroData';



export const CRQSuperHeroesPage = () => {
const [poll, setPoll] = React.useState(3000)
  const onSuccess =(data) =>{
    console.log(poll,"Side efect after data fetching",data)
    // if(data.data.length>3) {
    //   setPoll(false)
    // }
  }

  const onError =(error) =>{
    setPoll(false)
    console.log("Side efect after error",error)
  }

  const  {  isLoading, data ,isError, error, isFetching, refetch, } =  useSuperHeroData(onSuccess,onError)

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }


  return (
    <>
    <button onClick={refetch} > fetch heroes</button>
    {data.map(hero=> <div key={hero}>{hero} </div>)}
    <div>RQSuperHeroesPage</div>
    </>
  )
}
