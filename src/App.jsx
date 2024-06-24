import './App.css';
import { NextUIProvider } from '@nextui-org/react';
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
import MypageScreen from './pages/MypageScreen.jsx';
import Local from './pages/Local.jsx';
import Chat from './pages/Chat.jsx';
import Sumgocash from './pages/mypage/Sumgocash.jsx';
import AccountSetting from './pages/mypage/AccountSetting.jsx';
import Redirection from './pages/Redirection.jsx';
import MyProfileScreen from './pages/MyProfileScreen.jsx';
// import Nav from './pages/mypage/Nav.jsx';

function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.HOME} element={<MainScreen />} />
          <Route path={PATHS.AUTH_SIGN_IN} element={<LoginScreen />} />
          <Route path={PATHS.AUTH_SIGN_UP_FORM} element={<SignupScreen />} />
          <Route path={PATHS.SAFETY} element={<Safety />} />
          <Route path={PATHS.TRIP} element={<TripInfo />}>
            <Route path={PATHS.TRIP_LIST_BY_LOCATION} element={<TripInfo />} />
          </Route>

          <Route path={PATHS.CHAT} element={<Chat />} />
          <Route path={PATHS.LOCAL} element={<Local />} />
          <Route path={PATHS.PROFILE} />
          <Route path={PATHS.PROFILE_VIEW} />

          <Route path='/pages/Signup2Screen' element={<Signup2Screen />} />
          <Route path='/pages/TravelSubmissionScreen' element={<TravelSubmissionScreen />} />
          {/*<Route path='/pages/MypageScreen' element={<MypageScreen />} />*/}
          <Route path='/pages/LoginScreen' element={<LoginScreen />} />
          <Route exact path='/kakao/callback' element={<Redirection />} />

          {/*Nav-MypageScreen*/}
          <Route path='/pages/MypageScreen' element={<MypageScreen />}>
            <Route path='Sumgocash' element={<Sumgocash />} />
            <Route path='AccountSetting' element={<AccountSetting />} />
          </Route>

          <Route path='/pages/mypage/Nav' element={<MypageScreen />} />
        </Route>
      </Routes>
    </NextUIProvider>
  );
}

export default App;
