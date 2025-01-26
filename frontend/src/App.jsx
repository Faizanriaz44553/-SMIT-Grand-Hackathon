import React from 'react'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import RoutesJson from './routes/RoutesJson'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        {
          RoutesJson.map((item, index) => { // Corrected the map function syntax
            return <Route path={item.path} element={item.element} key={index} />
          })
        }
      </Routes>
      <Footer/>
    
    </div>
  )
}

export default App


