import { useState } from 'react';
import Cards from './Cards.jsx';
import Score from './Score.jsx';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  console.log(score);
  return (
    <>
      <Cards score={score} setScore={setScore} />
      <Score score={score} />
    </>
  );
}

export default App;
