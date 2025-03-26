import './App.css'
import { createBrowserRouter, Route,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './assets/root/Layout'
import MoviePage from './pages/MoviePage'
import SupportPage from './pages/SupportPage'
import PageUnderConstruction from './pages/PageUnderConstruction'
import ErrorPage from './pages/ErrorPage'
import ShowPage from './pages/ShowPage'
import SearchResultPage from './pages/SearchResultPage'
import Movies_ShowPage from './pages/Movies_ShowPage'
import GenrePage from './pages/GenrePage'
import SubscriptionPage from './pages/SubscriptionPage'

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element = {<Layout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path='/movie' element={<MoviePage/>}></Route>
            <Route path='/movies&tvshows' element={<Movies_ShowPage/>}></Route>
            <Route path='/show' element={<ShowPage/>}></Route>
            <Route path='/genre' element={<GenrePage/>}></Route>
            <Route path='/search_Result' element={<SearchResultPage/>}></Route>
            <Route path='/support' element={<SupportPage/>}></Route>
            <Route path='/subscription' element={<SubscriptionPage/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>

        </Route>
      )
    )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
