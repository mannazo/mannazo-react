import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as PATHS from './constants/paths.js';
import Layout from './components/layouts/Layout.jsx';
import MainScreen from './pages/MainScreen.jsx';
import SignupScreen from './pages/SignupScreen.jsx';
import LoginScreen from './pages/LoginScreen.jsx';
import TripInfo from './components/trip/TripInfo.jsx';
import Safety from './pages/Safety.jsx';
import TravelSubmissionScreen from './pages/TravelSubmissionScreen.jsx';
import Signup2Screen from './pages/Signup2Screen.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.HOME} element={<MainScreen />} />
          <Route path={PATHS.AUTH_SIGN_IN} element={<LoginScreen />} />
          <Route path={PATHS.AUTH_SIGN_UP_FORM} element={<SignupScreen />} />
          <Route path={PATHS.SAFETY} element={<Safety />} />
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
}

export default App;
