import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Signup from './Components/Signup/signup'
import Home from './Home/Home'
import MovieDetails from './pages/MovieDetails/MovieDetails'

const App = () => {
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
      <MovieDetails/>
    </div>
  )
}

export default App