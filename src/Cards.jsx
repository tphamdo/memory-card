import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NFLLogos from './NFLLogos.jsx';
import './Cards.css';

function Cards({ score, setScore }) {
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
    setCards(randomizeArr(cards));
  }, []);

  function randomizeCards() {
    setCards(randomizeArr([...cards]));
  }

  function handleClick(id) {
    console.log(id);
    let card = cards.find((card) => card.id === id);
    console.log(card.selected);
    if (card.selected) {
      gameOver();
    } else {
      let newScore = score + 1;
      setScore(newScore);
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
    <>
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className="card"
          >
            {card.logo}
          </div>
        );
      })}
    </>
  );
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
};

export default Cards;
