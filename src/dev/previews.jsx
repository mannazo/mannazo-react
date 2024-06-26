import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import TripInfo from '../components/trip/TripInfo.jsx';
import App from '../App.jsx';
import MypageScreen from '../pages/MypageScreen.jsx';
<<<<<<< HEAD
import LoginScreen from "../pages/LoginScreen.jsx";
import MyProfileScreen from "../pages/MyProfileScreen.jsx";
import AccountSetting from "../pages/mypage/AccountSetting.jsx";
=======
import LoginScreen from '../pages/LoginScreen.jsx';
import MyProfileScreen from '../pages/MyProfileScreen.jsx';
import AccountSetting from '../pages/mypage/AccountSetting.jsx';
import FlippableCard from '@/components/trip/FlippableCard.jsx';
import Card from '@/components/trip/Card.jsx';
import CardGallery from '@/components/trip/CardView.jsx';
import Header from '@/components/ResponsiveHeader.jsx';
import Error from '@/pages/errors/Error404.jsx';
>>>>>>> d91271b (feat: Header 로그인 여부 대응, 프로필 메뉴 추가)

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path='/TripInfo'>
        <TripInfo />
      </ComponentPreview>
      <ComponentPreview path='/ComponentPreviews'>
        <ComponentPreviews />
      </ComponentPreview>
      <ComponentPreview path='/App'>
        <App />
      </ComponentPreview>
      <ComponentPreview path='/MypageScreen'>
        <MypageScreen />
      </ComponentPreview>
      <ComponentPreview path='/LoginScreen'>
        <LoginScreen />
      </ComponentPreview>
      <ComponentPreview path='/MyProfileScreen'>
        <MyProfileScreen />
      </ComponentPreview>
      <ComponentPreview path='/AccountSetting'>
        <AccountSetting />
      </ComponentPreview>
<<<<<<< HEAD
=======
      <ComponentPreview path='/FlippableCard'>
        <FlippableCard />
      </ComponentPreview>
      <ComponentPreview path='/Card'>
        <Card />
      </ComponentPreview>
      <ComponentPreview path='/CardGallery'>
        <CardGallery />
      </ComponentPreview>
      <ComponentPreview path='/Header'>
        <Header />
      </ComponentPreview>
      <ComponentPreview path='/Error'>
        <Error />
      </ComponentPreview>
>>>>>>> d91271b (feat: Header 로그인 여부 대응, 프로필 메뉴 추가)
    </Previews>
  );
};

export default ComponentPreviews;
