import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ChooseTeam from './pages/ChooseTeam'
import ContinuePackage from './pages/ContinuePackage'

const App = () => {
  return (
    <div className='bg-black text-white '>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chooseTeam' element={<ChooseTeam />} />
            <Route path='/continuePackage' element={<ContinuePackage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



