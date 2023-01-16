import { useContext } from 'react';
import GameContext from '../contexts/GameContext';

import { coordToNum } from '../utils/helperFunctions';
import { OBJECT, MOVE, GAME_SETTING } from '../config/gameSettings';

const useMovePacman = () => {
  const { pacPosition, pacDirection, boardArray, setPacPosition } =
    useContext(GameContext);

  const pacmanNextMove = () => {
    // CONVERT COORDINATES TO INDEX

    const currentIndex = pacPosition;

    // DETERMINE NEXT MOVE
    const moveDirection = MOVE.filter(
      (i) => i.direction === pacDirection.direction
    );
    const nextIndex = currentIndex + moveDirection[0]?.count;

    // CHECK FOR OBJECT INTERACTION
    let nextObject = OBJECT[boardArray[nextIndex]];
    return { pacman: { nextObject, currentIndex, nextIndex } };
    // return { character: 'pacman', nextObj, currentIndex, nextIndex };
  };

  return { pacmanNextMove };
};
export default useMovePacman;
