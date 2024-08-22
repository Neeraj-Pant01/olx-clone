import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import SingleItem from './pages/SingleItem'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Seller from './pages/Seller'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Upload from './pages/Upload'
import { useSelector } from 'react-redux'

const App = () => {
  const [login, setLogin] = useState(false)
  const location = useLocation();
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <>
    <Navbar setLogin={setLogin} />
    {
      location.pathname !== '/upload' &&
      <header className='flex items-center px-32 shadow-md mt-3 pb-2 gap-20'>
      <div className="flex items-center gap-6 font-semibold text-[#002f34]">
          <span>ALL CATEGORIES</span>
          <AiOutlineArrowDown />
      </div>
      <div className="flex items-center gap-5 text-[#002f34]">
          <span>Cars</span>
          <span>Motorcycles</span>
          <span>Mobile Phones</span>
          <span>AC</span>
          <span>For Sale : House & Appartment</span>
      </div>
  </header>
    }
        <Routes>
          <Route path='/' element={<Homepage login={login} setLogin={setLogin} />} />
          <Route path='/seller/:id' element={ <Seller /> } />
          <Route path='/product/:id' element={<SingleItem />} />
          <Route path='/upload' element={user ? <Upload /> : <Navigate to={'/'} />} />
        </Routes>
    <Footer />
    </>
  )
}

export default App
