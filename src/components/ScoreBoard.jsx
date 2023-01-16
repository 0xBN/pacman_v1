import { useContext } from 'react';
import GameContext from '../contexts/GameContext';

const ScoreBoard = () => {
  const { points, timer, frames } = useContext(GameContext);
  return (
    <div className={`text-3xl font-game text-yellow-400 flex`}>
      <p>Points: {points}</p>
      <div className={`absolute top-0 left-0`}>
        <p className={`text-sm text-green-400`}>Time: {timer}</p>
        <p className={`text-sm text-green-400`}>Frames: {frames}</p>
        <p className={`text-sm text-green-400`}>
          FPS: {timer < 5 ? 'calculating...' : (frames / timer).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
export default ScoreBoard;
