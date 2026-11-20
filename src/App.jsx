import React, { useCallback, useEffect, useState } from 'react';
import Background from './components/Background.jsx';
import Landing from './screens/Landing.jsx';
import Sad from './screens/Sad.jsx';
import Menu from './screens/Menu.jsx';
import Photos from './screens/Photos.jsx';
import Letter from './screens/Letter.jsx';
import Flowers from './screens/Flowers.jsx';

const SCREENS = { landing: Landing, sad: Sad, menu: Menu, photos: Photos, letter: Letter, flowers: Flowers };
const read = () => {
  const k = window.location.hash.replace('#', '');
  return SCREENS[k] ? k : 'landing';
};

export default function App() {
  const [screen, setScreen] = useState(read);

  useEffect(() => {
    const onHash = () => { setScreen(read()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const go = useCallback((s) => { window.location.hash = s; }, []);
  const Screen = SCREENS[screen];

  return (
    <>
      <Background />
      <div className="app">
        <Screen key={screen} go={go} />
      </div>
    </>
  );
}
