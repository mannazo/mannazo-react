import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import TripInfo from '../components/trip/TripInfo.jsx';
import App from '../App.jsx';
import MypageScreen from '../pages/MypageScreen.jsx';
import LoginScreen from "../pages/LoginScreen.jsx";
import MyProfileScreen from "../pages/MyProfileScreen.jsx";

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
    </Previews>
  );
};

export default ComponentPreviews;
