import PropTypes from 'prop-types';
import styles from './ScoreBoard.module.css';

function ScoreBoard({ score, highScore }) {
  return (
    <div className={styles.scoreBoard}>
      <div className={styles.score}>Score: {score}</div>
      <div className={styles.highScore}>Best Score: {highScore}</div>
    </div>
  );
}

ScoreBoard.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
};

export default ScoreBoard;
