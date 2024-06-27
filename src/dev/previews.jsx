import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import TestCard from '@/components/cards/TestCard.jsx';
import Card from '@/components/cards/TestCard.jsx';
import TravellerCard from '@/components/cards/TravellerCard.jsx';
import Header from '@/components/ResponsiveHeader.jsx';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path='/Card'>
        <TestCard />
      </ComponentPreview>
      <ComponentPreview path='/Card'>
        <Card />
      </ComponentPreview>
      <ComponentPreview path='/TravellerCard'>
        <TravellerCard />
      </ComponentPreview>
      <ComponentPreview path='/Header'>
        <Header />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
