import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import TripInfo from '../components/trip/TripInfo.jsx';
import App from '../App.jsx';
import MypageScreen from '../pages/MypageScreen.jsx';
import LoginScreen from '../pages/LoginScreen.jsx';
import MyProfileScreen from '../pages/MyProfileScreen.jsx';
import AccountSetting from '../pages/mypage/AccountSetting.jsx';
import FlippableCard from '@/components/trip/FlippableCard.jsx';
import Card from '@/components/trip/Card.jsx';
import CardGallery from '@/components/trip/CardView.jsx';
import Header from '@/components/ResponsiveHeader.jsx';

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
    </Previews>
  );
};

export default ComponentPreviews;
