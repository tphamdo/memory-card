import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Gifs({ score, setScore }) {
  const [gifs, setGifs] = useState([]);

  const query = 'Jayden Daniels';
  useEffect(() => {
    let ignore = false;

    async function fetchGifs() {
      try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=16&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        const response = await fetch(url);
        const result = await response.json();

        let gifs = [];
        result.data.forEach((entry) => {
          const gif = {
            id: entry.id,
            url: entry.images.original.url,
            selected: false,
          };
          console.log(gif);
          gifs.push(gif);
        });

        if (!ignore) {
          setGifs([...gifs]);
        }
      } catch (error) {
        if (!ignore) {
          setGifs([]);
        }
        console.error(error);
      }
    }

    fetchGifs();
  }, [query]);

  function randomizeGifs() {
    setGifs(randomizeArr([...gifs]));
  }

  function handleClick(id) {
    let gif = gifs.find((gif) => gif.id === id);
    if (gif.selected) {
      gameOver();
    } else {
      let newScore = score + 1;
      setScore(newScore);
      gif.selected = true;
      if (newScore === gifs.length) {
        gameOver();
      }
    }
    randomizeGifs();
  }

  function gameOver() {
    console.log('game over');
    let gifsCopy = [...gifs];
    gifsCopy.forEach((gif) => (gif.selected = false));
    setGifs(gifsCopy);
    setScore(0);
  }

  return (
    <>
      {gifs.map((gif) => {
        return (
          <img
            key={gif.id}
            src={gif.url}
            style={{ width: '250px', height: '250px' }}
            onClick={() => handleClick(gif.id)}
          />
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

Gifs.propTypes = {
  score: PropTypes.number,
  setScore: PropTypes.func,
};

export default Gifs;
