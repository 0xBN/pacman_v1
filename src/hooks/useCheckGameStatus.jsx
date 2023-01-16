import { useContext, useEffect } from 'react';
import GameContext from '../contexts/GameContext';

const useCheckGameStatus = () => {
  const {
    dotCount,
    pillCount,
    setInGame,
    pacLives,
    setFrames,
    frames,
    inGame,
    isLoading,
  } = useContext(GameContext);

  useEffect(() => {
    if (!isLoading) {
      checkWin();
      checkGameOver();
    }
  }, [frames]);

  const checkWin = () => {
    if (dotCount < 1 && pillCount < 1) {
      console.log('you win!');
      setInGame(false);
    }
  };
  const checkGameOver = () => {
    if (pacLives < 0) {
      console.log('GAME OVER');
      setInGame(false);
    }
  };
};
export default useCheckGameStatus;
