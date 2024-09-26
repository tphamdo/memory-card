import PropTypes from 'prop-types';
import './Score.css';

function Score({ score }) {
  return <div className="score">{score}</div>;
}

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
