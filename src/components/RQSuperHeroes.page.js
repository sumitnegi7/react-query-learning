import axios from 'axios';
import React from 'react'
import {useQuery} from "react-query";
import {Link } from "react-router-dom"

const fetchSuperHeroes = ()=> {
    return  axios.get("http://localhost:4000/superheroes")
  }

export const RQSuperHeroesPage = () => {
// const [poll, setPoll] = React.useState(3000)
//   const onSuccess =(data) =>{
//     console.log(poll,"Side efect after data fetching",data.data.length,data)
//     if(data.length>3) {
//       setPoll(false)
//     }
//   }

//   const onError =(error) =>{
//     setPoll(false)
//     console.log("Side efect after error",error)
//   }

  const  {  isLoading, data ,isError, error, isFetching, refetch, } =  useQuery('super-heroes', fetchSuperHeroes,{
    // cacheTime:5000,....... Specify cache time for query data 
    // staleTime:30000,....... specify stale time after which query becomes stale
    // refetchIntervalInBackground: 2000, ..... Polling even if tab is moved to background
    // refetchInterval: poll, .........polling
    // refetchOnMount: true ......... fetching data on mount
    // enabled: false, .......... Not fire get request at the time of mounting
    // refetchOnWindowFocus: true .......... refetch data when focus is moved and brought back in
    // onSuccess, ............onSuccess hook lets you add custom handling like showing toast, pop-up, redirection etc
    // onError, ....... same as onSuccess but this is used for error handling
    // select : (data) => {
    //   const superHeroNames =  data.data.map(hero=> hero.name)
    //   return superHeroNames
    // }  ........ select allows you to only select the properties you want from query data
  })

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }


  return (
    <>
    <button onClick={refetch} > fetch heroes</button>
    {data?.data.map(hero=> <Link key={hero.id} to={`/rq-super-heroes/${hero.id}`}>{hero.name} </Link>)}
    <div>RQSuperHeroesPage</div>
    </>
  )
}
