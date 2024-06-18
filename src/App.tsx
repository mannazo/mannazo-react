import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// @ts-ignore
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Header from './Components/Header';
import MainScreen from './Pages/MainScreen.tsx';
import SignupScreen from "./Pages/SignupScreen.tsx";
import Footer from "./Components/Footer.tsx";

const App: React.FC = () => {
    return <>
        <Router>
            <Header />
            {/*<MainScreen />*/}
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/Pages/SignupScreen" element={<SignupScreen />} />

            </Routes>
            <Footer />
        </Router>
        </>
}

export default App
