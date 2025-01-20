import React from 'react'
import FirstPage from './Components/FirstPage/FirstPage'
import SecondPage from './Components/SecondPage/SecondPage'
import ThirdPage from './Components/ThirdPage/ThirdPage'
import FourthPage from './Components/FourthPage/FourthPage'
import FifthPage from './Components/FifthPage/FifthPage'
import SixthPage from './Components/SixthPage/SixthPage'
import SeventhPage from './Components/SeventhPage/SeventhPage'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<SecondPage />} />
        <Route path="/individual-register" element={<ThirdPage />} />
        <Route path="/bulk-import" element={<FourthPage />} />
        <Route path="/img-upload" element={<FifthPage />} />
        <Route path="/pdf-upload" element={<SixthPage />} />
        <Route path="/records" element={<SeventhPage />} />
      </Routes>
    </div>
  )
}

export default App