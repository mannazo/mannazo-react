import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import MainScreen from './Pages/MainScreen.tsx'
import SignupScreen from './Pages/SignupScreen.tsx'
import Footer from './Components/Footer.tsx'
import Signup2Screen from './Pages/Signup2Screen.tsx'
import TravelSubmissionScreen from './Pages/TravelSubmissionScreen.tsx'
import LoginScreen from './Pages/LoginScreen.tsx'
import MypageScreen from './Pages/MypageScreen.tsx'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/Pages/SignupScreen' element={<SignupScreen />} />
        <Route path='/Pages/Signup2Screen' element={<Signup2Screen />} />
        <Route
          path='/Pages/TravelSubmissionScreen'
          element={<TravelSubmissionScreen />}
        />
        <Route path='/Pages/LoginScreen' element={<LoginScreen />} />
        <Route path='/Pages/MypageScreen' element={<MypageScreen />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
