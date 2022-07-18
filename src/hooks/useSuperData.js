import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchSuperHero = (heroId) => {
//   const heroId = queryKey[1]     alternative provided by react query
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperData = (heroId) => {
    const queryClient = useQueryClient()
  return useQuery(['super-hero',heroId],()=> fetchSuperHero(heroId), {
    // select : (data) => {
    //     const superHeroNames =  data.data.map(hero=> hero.name)
    //     return superHeroNames
    //   }
    /**
     * Initial data from GET query in prev page
     */
    initialData: () =>{
        const hero = queryClient.getQueryData('super-heroes')?.data?.find(hero => hero.id === Number.parseInt(heroId,10))

        if(hero){
            return{
                data: hero
            }
        } else {
            return undefined
        }
    }
})
}