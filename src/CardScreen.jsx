import { useState } from 'react';
import { NFL } from 'react-nfl-logos';
import PropTypes from 'prop-types';
import Cards from './Cards.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import Score from './Score.jsx';
import styles from './CardScreen.module.css';

const DIFFICULTY_MAP = {
  easy: 8,
  medium: 16,
  hard: 32,
};

function getNumCards(difficulty) {
  if (Object.keys(DIFFICULTY_MAP).includes(difficulty))
    return DIFFICULTY_MAP[difficulty];
  return DIFFICULTY_MAP['easy'];
}

function CardScreen({ difficulty, setHomeScreen }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const numCards = getNumCards(difficulty);
  return (
    <div className={styles.body}>
      <header>
        <div className={styles.header}>
          <div className={styles.logo} onClick={() => setHomeScreen(true)}>
            <NFL size={200} />
          </div>
          <ScoreBoard score={score} highScore={highScore} />
        </div>
      </header>
      <div className={styles.playGround}>
        <Cards
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          numCards={numCards}
        />
        <Score score={score} numCards={numCards} />
      </div>
    </div>
  );
}

CardScreen.propTypes = {
  difficulty: PropTypes.string,
  setHomeScreen: PropTypes.func,
};

export default CardScreen;
