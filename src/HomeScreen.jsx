import PropTypes from 'prop-types';
import { NFL } from 'react-nfl-logos';
import styles from './HomeScreen.module.css';

function HomeScreen({ setDifficulty, setHomeScreen }) {
  function handleClick(diff) {
    setDifficulty(diff);
    setHomeScreen(false);
  }

  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <NFL size={300} />
        </div>
        <h1 className={styles.title}>Memory Game</h1>
        <div className={styles.buttons}>
          <button onClick={() => handleClick('easy')}>Easy</button>
          <button onClick={() => handleClick('medium')}>Medium</button>
          <button onClick={() => handleClick('hard')}>Hard</button>
        </div>
      </div>
    </div>
  );
}

HomeScreen.propTypes = {
  setDifficulty: PropTypes.func,
  setHomeScreen: PropTypes.func,
};

export default HomeScreen;
