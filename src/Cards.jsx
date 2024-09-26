import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NFLLogos from './NFLLogos.jsx';
import styles from './Cards.module.css';

function Cards({ score, setScore, highScore, setHighScore, numCards }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let cards = [];
    NFLLogos.forEach((logo) => {
      const card = {
        selected: false,
        logo: logo,
        id: logo.key,
      };
      cards.push(card);
    });
    const subset = getRandomSubset(cards, numCards);
    setCards(subset);
  }, [numCards]);

  function randomizeCards() {
    setCards(randomizeArr([...cards]));
  }

  function handleClick(id) {
    let card = cards.find((card) => card.id === id);
    if (card.selected) {
      gameOver();
    } else {
      let newScore = score + 1;
      setScore(newScore);
      setHighScore(Math.max(highScore, newScore));
      card.selected = true;
      if (newScore === cards.length) {
        gameOver();
      }
    }
    randomizeCards();
  }

  function gameOver() {
    console.log('game over');
    let cardsCopy = [...cards];
    cardsCopy.forEach((gif) => (gif.selected = false));
    setCards(cardsCopy);
    setScore(0);
  }

  return (
    <div className={styles.cards}>
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={styles.card}
          >
            {card.logo}
          </div>
        );
      })}
    </div>
  );
}

function getRandomSubset(arr, n) {
  randomizeArr(arr);
  return arr.slice(0, n);
}
function randomizeArr(arr) {
  for (let i = 0; i < arr.length; ++i) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

Cards.propTypes = {
  score: PropTypes.number,
  setScore: PropTypes.func,
  highScore: PropTypes.number,
  setHighScore: PropTypes.func,
  numCards: PropTypes.number,
};

export default Cards;
