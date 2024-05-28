import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ChooseTeam from './pages/ChooseTeam'


const App = () => {
  return (
    <div className='bg-black text-white '>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chooseTeam' element={<ChooseTeam />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



