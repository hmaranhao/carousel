import React from 'react';

import Carousel from './components/carousel'

const images = [
  'https://images6.alphacoders.com/101/1014033.jpg',
  'https://s1.1zoom.me/b5050/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1920x1080.jpg',
  'https://www.fundoswiki.com/Uploads/fundoswiki.com/Resolucoes/4516-1920x1080.jpg',
  'https://images5.alphacoders.com/100/thumb-1920-1000923.jpg',
  'https://images.wallpaperscraft.com/image/street_night_wet_155637_1920x1080.jpg'
]

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center'
      }}
    >
      <div
        style={{
          width: '50%',
        }}
      >
        <Carousel images={images ?? []} />
      </div>
    </div>
  );
}

export default App;
