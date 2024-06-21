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
import MypageScreen from './pages/MypageScreen.jsx';
import Local from './pages/Local.jsx';
import Chat from './pages/Chat.jsx';

function App() {
  return (
    <>
      <Routes>
        {/*Layout 클래스를 사용하는 경로*/}
        <Route path={PATHS.HOME} element={<Layout />}>
          <Route index element={<MainScreen />} />
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
          <Route path='/pages/MypageScreen' element={<MypageScreen />} />
          <Route path='/pages/LoginScreen' element={<LoginScreen />} />
        </Route>

        {/*Layout 클래스를 사용하지 않는 경로*/}
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
