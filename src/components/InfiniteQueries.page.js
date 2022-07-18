import { Fragment, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { useIsVisible } from '../hooks/useIsVisible'

const fetchImages = ({ pageParam = 1 }) => {
  console.log(pageParam,'🔥 🔥 🔥 🔥 ') 
  return axios.get(`http://localhost:4000/images?_limit=4&_page=${pageParam}`)
}

export const InfiniteQueriesPage = () => {

  const [buttonRef, isButtonVisible] = useIsVisible({
    threshold: 0.1
  });


  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery(['images'], fetchImages, {
    getNextPageParam: (_lastPage, pages) => {
      console.log(pages.length,"ljkljk")
      if (pages.length < 12) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  })


  useEffect(()=>{
    console.log(isButtonVisible,'🍉 🍉 🍉 🍉 🍉 🍉 ') 
    if(isButtonVisible === true){
      fetchNextPage()
    }
  },[fetchNextPage, isButtonVisible])


  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }


  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          console.log(group,"+++")
          return (
            <Fragment key={i}>
              {group.data.map(color => (
                <>
                <h6>{color.id}</h6>
                <img src={color.url} alt={color.id}/>
                <br/>
                </>
              ))}
              
            </Fragment>
          )
        })}
      </div>
      <div>
        <button onClick={() => fetchNextPage()} ref={buttonRef} disabled={!hasNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}