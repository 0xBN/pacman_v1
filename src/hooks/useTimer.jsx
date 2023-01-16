import { useContext, useEffect } from 'react';
import GameContext from '../contexts/GameContext';

const useTimer = () => {
  const { inGame, setTimer } = useContext(GameContext);
  useEffect(() => {
    let tick;
    if (inGame) {
      tick = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(tick);
    };
  }, [setTimer, inGame]);
};
export default useTimer;
