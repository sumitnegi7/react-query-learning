import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import { HomePage } from './components/Home.page'
import { ParallelQueriesPage } from './components/ParallelQueries.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { CRQSuperHeroesPage } from './components/CRQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import { RQSuperHeroPage } from "./components/RQSuperHero.page"
import { DependentParallelPage } from './components/DependentParallel.page'
import { PaginatedQueriesPage } from './components/PaginatedQueries.page'
import { InfiniteQueriesPage } from './components/InfiniteQueries.page'


const queryClient = new QueryClient()


/**
 * Some comments regarding  react query are made in RQSuperHeroes.page.js file 
 * @returns 
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/crq-super-heroes'>CRQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-parallel'>RQ Parallel</Link>
              </li>
              <li>
                <Link to='/rq-dependent'>RQ Dep</Link>
              </li>
              <li>
                <Link to='/rq-paginated'>RQ Paginated</Link>
              </li>
              <li>
                <Link to='/rq-infinite'>RQ Infinite</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/super-heroes' element={<SuperHeroesPage/>} />
            <Route path='/rq-parallel' element={<ParallelQueriesPage/>} />
            <Route path='/rq-dependent' element={<DependentParallelPage email="zzz@example.com"/>} />
            <Route path='/rq-super-heroes' element={  <RQSuperHeroesPage />}/>
            <Route path='/crq-super-heroes' element={  <CRQSuperHeroesPage />}/>
            <Route path='/rq-paginated' element={  <PaginatedQueriesPage />}/>
            <Route path='/rq-infinite' element={  <InfiniteQueriesPage />}/>
            <Route path='/rq-super-heroes/:heroId' element={  <RQSuperHeroPage />}/>
            <Route path='/' element={<HomePage />}/>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools/>
      </QueryClientProvider>

  )
}

export default App