import './App.css'
import { createBrowserRouter, Route,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './assets/root/Layout'
import MoviePage from './pages/MoviePage'
import SupportPage from './pages/SupportPage'

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element = {<Layout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path='/movie' element={<MoviePage/>}></Route>
            <Route path='/support' element={<SupportPage/>}></Route>
        </Route>
      )
    )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
