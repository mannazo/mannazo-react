import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as PATHS from './constants/paths';
import MainScreen from './pages/MainScreen.tsx';
import SignupScreen from './pages/SignupScreen.tsx';
import Signup2Screen from './pages/Signup2Screen.tsx';
import TripInfo from './components/trip/TripInfo.tsx';
import LoginScreen from './pages/LoginScreen.tsx';
import Layout from './Layout.tsx';
import TravelSubmissionScreen from './pages/TravelSubmissionScreen.tsx';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.HOME} element={<MainScreen />} />
          <Route path={PATHS.AUTH_SIGN_IN} element={<LoginScreen />} />
          <Route path={PATHS.AUTH_SIGN_UP_FORM} element={<SignupScreen />} />
          <Route path={PATHS.SAFETY} />
          <Route path={PATHS.TRIP} element={<TripInfo />} />
          <Route path={PATHS.CHAT} />
          <Route path={PATHS.LOCAL} />
          <Route path={PATHS.PROFILE} />
          <Route path={PATHS.PROFILE_VIEW} />

          <Route path='/Pages/Signup2Screen' element={<Signup2Screen />} />
          <Route path='/Pages/TravelSubmissionScreen' element={<TravelSubmissionScreen />} />

          <Route path='/Pages/LoginScreen' element={<LoginScreen />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
