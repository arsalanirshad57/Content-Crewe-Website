import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ChooseTeam from './pages/choose-team'
import ContinuePackage from './pages/continue-package'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/scroll-to-top'


const App = () => {
  return (
    <div className='bg-black text-white overflow-x-hidden '>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
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



