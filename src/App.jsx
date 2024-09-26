import { useState } from 'react';
import Gifs from './Gifs.jsx';

function App() {
  const [score, setScore] = useState(0);

  console.log(score);
  return <Gifs score={score} setScore={setScore} />;
}

export default App;
