import { useState } from 'react';
import HomeScreen from './HomeScreen.jsx';
import CardScreen from './CardScreen.jsx';
import './App.css';

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [homeScreen, setHomeScreen] = useState(true);

  return (
    <>
      {homeScreen && (
        <HomeScreen
          setDifficulty={setDifficulty}
          setHomeScreen={setHomeScreen}
        />
      )}
      {!homeScreen && (
        <CardScreen difficulty={difficulty} setHomeScreen={setHomeScreen} />
      )}
    </>
  );
}

export default App;
