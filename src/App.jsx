import './App.css';
import {Route, Routes} from 'react-router-dom';
import * as PATHS from './constants/paths.js';
import Layout from './components/layouts/Layout.jsx';
import SignupScreen from './pages/SignupScreen.jsx';
import LoginScreen from './pages/LoginScreen.jsx';

import TravelSubmissionScreen from './pages/TravelSubmissionScreen.jsx';
import Signup2Screen from './pages/Signup2Screen.jsx';
import MypageScreen from './pages/MypageScreen.jsx';
import Local from './pages/Local.jsx';
import Chat from './pages/Chat.jsx';
import Sumgocash from './pages/mypage/Sumgocash.jsx';
import AccountSetting from './pages/mypage/AccountSetting.jsx';
import Redirection from './pages/Redirection.jsx';
import CardView from './components/trip/CardView.jsx';
import ErrorPage from './pages/errors/ErrorPage.jsx';
import TravellerCardFeed from './components/cards/TravellerCardFeed.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import WhyMannazu from './pages/about/WhyMannazu.jsx';
import HowItWorks from './pages/about/HowItWorks.jsx';
import Safety from './pages/about/Safety.jsx';
import AboutAll from './pages/about/AboutAll.jsx';
import {AuthProvider} from './hooks/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.HOME} element={<AboutAll />} />
          <Route path={PATHS.AUTH_SIGN_IN} element={<LoginScreen />} />
          <Route path={PATHS.AUTH_SIGN_UP_FORM} element={<SignupScreen />} />
          <Route path={PATHS.TRIP} element={<TravellerCardFeed />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/about/why' element={<WhyMannazu />}></Route>
          <Route path='/about/how-it-works' element={<HowItWorks />}></Route>
          <Route path='/about/safety' element={<Safety />}></Route>
          <Route path={'/dev/card'} element={<CardView />}></Route>

          <Route path={PATHS.CHAT} element={<Chat />} />
          <Route path={PATHS.LOCAL} element={<Local />} />
          <Route path={PATHS.PROFILE} />
          <Route path={PATHS.PROFILE_VIEW} />

          <Route path='/pages/Signup2Screen' element={<Signup2Screen />} />
          <Route path='/pages/TravelSubmissionScreen' element={<TravelSubmissionScreen />} />
          <Route path='/pages/LoginScreen' element={<LoginScreen />} />
          <Route exact path='/kakao/callback' element={<Redirection />} />

          {/*Nav-MypageScreen*/}
          <Route path={PATHS.MYPAGE} element={<MypageScreen />}>
            <Route path='Sumgocash' element={<Sumgocash />} />
            <Route path={PATHS.ACCOUNT} element={<AccountSetting />} />
          </Route>

          <Route path='/pages/mypage/Nav' element={<MypageScreen />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
