import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainScreen from './pages/MainScreen.tsx';
import SignupScreen from './pages/SignupScreen.tsx';
import Signup2Screen from './pages/Signup2Screen.tsx';
import TripInfo from './components/trip/TripInfo.tsx';
import LoginScreen from './pages/LoginScreen.tsx';
import Layout from './Layout.tsx';
// import MypageScreen from './pages/MypageScreen.tsx';
import TravelSubmissionScreen from './pages/TravelSubmissionScreen.tsx';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainScreen />} />
          <Route path='/Pages/SignupScreen' element={<SignupScreen />} />
          <Route path='/Pages/Signup2Screen' element={<Signup2Screen />} />
          <Route path='/Pages/TravelSubmissionScreen' element={<TravelSubmissionScreen />} />
          <Route path='/trip' element={<TripInfo />} />
          <Route path='/Pages/LoginScreen' element={<LoginScreen />} />
          {/*<Route path='/Pages/MypageScreen' element={<MypageScreen />} />*/}
        </Route>
      </Routes>
    </>
  );
};

export default App;
