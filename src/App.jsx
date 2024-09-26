import { useState } from 'react';
import Cards from './Cards.jsx';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  console.log(score);
  return (
    <div className="cards">
      <Cards score={score} setScore={setScore} />
    </div>
  );
}

export default App;
