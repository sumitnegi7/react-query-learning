import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
//   const heroId = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes`)
}

export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery('super-hero', fetchSuperHeroes, {
    onSuccess,
    onError,
    select : (data) => {
        const superHeroNames =  data.data.map(hero=> hero.name)
        return superHeroNames
      }
})
}

