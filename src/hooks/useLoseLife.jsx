import { useContext } from 'react';
import GameContext from '../contexts/GameContext';
import { gameSetting, MOVE } from '../config/gameSettings';

const useLoseLife = () => {
  const { setPacStatus, setInGame, pacLives, setPacLives } =
    useContext(GameContext);

  const loseLife = () => {
    console.log('loseLife');
    if (pacLives < 0) {
      console.log('GAME OVER');
    }
    setPacStatus('dead');
    setInGame(false);
    setPacLives((prev) => prev - 1);
  };

  return { loseLife };
};
export default useLoseLife;
