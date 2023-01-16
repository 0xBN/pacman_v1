import { useContext, useEffect } from 'react';
import GameContext from '../contexts/GameContext';
import {
  useMovePacman,
  useCheckGameStatus,
  useMoveSprite,
  useUpdateBoard,
  useTimer,
} from '../hooks';

const GameLoop = () => {
  const { inGame, setFrames, frames, setCharacterMoves } =
    useContext(GameContext);

  const { pacmanNextMove } = useMovePacman();
  const { spriteNextMove } = useMoveSprite();
  const { updateEntireBoard, updateBoard } = useUpdateBoard();

  useTimer();
  useCheckGameStatus();

  // STARTS: TRUE

  const getCharacterMoves = () => {
    setCharacterMoves({
      ...pacmanNextMove(),
      ...spriteNextMove('blinky'),
      ...spriteNextMove('pinky'),
      ...spriteNextMove('inky'),
      ...spriteNextMove('clyde'),
    });
  };

  useEffect(() => {
    let pacmanMovement;
    let spriteMovement;

    if (inGame) {
      pacmanMovement = setInterval(() => {
        getCharacterMoves();
        // updateEntireBoard();
        updateBoard();

        setFrames((prev) => prev + 1);
      }, 50); //gameSetting.pacSpeed
    }

    return () => {
      clearInterval(pacmanMovement);
      clearInterval(spriteMovement);
    };
  }, [inGame, frames]);

  return <div className={``}></div>;
};
export default GameLoop;
