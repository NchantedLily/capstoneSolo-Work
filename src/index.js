import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IMAGES from '../src/images';

const IMAGES = {
  brewMad: require('./madtreeBrewingimage.png').default,
  brewRhine: require('./rhinegeistBrewerylogo.png').default,
  brewBrink: require('./brinkBrewingCologo.png').default,
  brewSons: require('./sonsOfToilBrewingCologo.webp').default,
  brewStreets: require('./streetsideBrewerylogo.png').default,
  brewUrban: require('./urbanArtifactlogo.png').default,
  brewMarch: require('./marchFirstBrewerylogo.png').default,
  late16Bit: require('./src/images/16BitBarlogo.png').default,
  lateBelowZero: require('./belowZeroLoungelogo.png.crdownload').default,
  lateTokyo: require('./tokyoKittylogo.png').default,
  lateMecca: require('./meccaOTRlogo.png').default,
  lateLost: require('./lostAndFoundlogo.png').default,
  lateBrewLogoMain: require('./lateNightimage3.png').default,
  foodLogoMain: require('./cutleryimage3.png').default,
  foodSenate: require('./senatepublogo.png').default,
  foodTasteBelg: require('./tasteofbelgiumlogo.png').default,
  foodBakersOTR: require('./bakersfieldOTRlogo.jpg').default,
  foodMontgomery: require('./montgomeryinnlogo.png').default,
  foodMtAdamsBar: require('./mtadamsbarandgrilllogo.jfif').default,
  foodSky: require('./skylinechililogo.png').default,
  foodLarosas: require('./larosaspizzalogo.png').default,
  foodFrischs: require('./frichsbigboylogo.png').default,
  foodBluAshCh: require('./blueashchililogo.png').default,
  foodsGraeters: require('./graetersicecreamlogo.png').default,
  foodTurf: require('./turfclublogo.png').default,


 
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <IMAGES />
  </React.StrictMode>
  document.getElementById('root')
);


reportWebVitals();

 export default IMAGES;
