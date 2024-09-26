import PropTypes from 'prop-types';
import styles from './Score.module.css';

function Score({ score, numCards }) {
  return (
    <div className={styles.score}>
      {score} / {numCards}
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number,
  numCards: PropTypes.number,
};

export default Score;
