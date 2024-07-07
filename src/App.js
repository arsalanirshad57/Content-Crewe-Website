import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ChooseTeam from './pages/choose-team'
import ContinuePackage from './pages/continue-package'

const App = () => {
  return ( 
    <div className='bg-black text-white overflow-x-hidden '>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ChooseTeam' element={<ChooseTeam />} />
            <Route path='/ContinuePackage' element={<ContinuePackage />} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App



