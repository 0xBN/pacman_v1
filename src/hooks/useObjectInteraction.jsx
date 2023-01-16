import { useContext, useEffect } from 'react';
import GameContext from '../contexts/GameContext';
import {
  COOL_DOWN,
  ENEMY_STATUS,
  gameSetting,
  MOVE,
  OBJECT,
  GHOSTS,
} from '../config/gameSettings';
import { useLoseLife, updateBoard, useUpdateBoard } from './';
import { coordToNum, numToCoord } from '../utils/helperFunctions';

const useObjectInteraction = () => {
  const {
    setPacDirection,
    boardArray,
    setBoardArray,
    setPacPosition,
    setPoints,
    enemyStatus,
    setEnemyStatus,
    setDotCount,
    setPillCount,
    setPacStatus,
    pacStatus,
    blinkyPosition,
    pinkyPosition,
    inkyPosition,
    clydePosition,
    pacPosition,
  } = useContext(GameContext);

  const { loseLife } = useLoseLife();
  const { updateBoard } = useUpdateBoard();

  // const handleObjectInteraction = (object, currentIndex, nextIndex) => {
  //   if (['wall', 'lair'].includes(object)) return;

  //   if (GHOSTS.includes(object)) handleGhost(object);
  //   if (object === 'dot') handleDot();
  //   if (object === 'pill') handlePill();

  //   // currentIndex and nextIndex refer to pacmans position

  //   updateBoard(currentIndex, nextIndex);
  // };

  // const handleGhost = (ghost) => {
  //   if (enemyStatus.mode === 'scatter' || enemyStatus.mode === 'chasing') {
  //     // loseLife();
  //     // PUT GHOST IN PLACE OF PACMAN AND MOVE PACMAN TO START
  //   }
  //   if (enemyStatus.mode === 'frightened') {
  //     // killGhost(ghost);
  //   }
  // };

  // const handleDot = () => {
  //   setDotCount((prev) => prev - 1);
  //   setPoints((prev) => prev + 1);
  // };

  // const handlePill = () => {
  //   setPacStatus('chasing');
  //   // EXTRA POINTS FOR PILL AND ENEMY BECOMES FRIGHTENED
  //   setPillCount((prev) => prev - 1);
  //   setPoints((prev) => prev + 10);
  //   setEnemyStatus(
  //     ENEMY_STATUS.filter((stat) => {
  //       return stat.mode === 'frightened';
  //     })[0]
  //   );
  //   // ENEMY CAN BE EATEN FOR FEW SECONDS
  //   setTimeout(() => {
  //     setEnemyStatus(
  //       ENEMY_STATUS.filter((stat) => {
  //         setPacStatus('eating');
  //         return stat.mode === 'scatter';
  //       })[0]
  //     );
  //   }, COOL_DOWN.frightened);
  // };

  // const killGhost = (ghost) => {
  //   // 3,4,5,6: GHOSTS VULNERABLE: POINTS GHOSTS RESTART AT LAIR

  //   console.log('kill ', ghost);
  // };

  const sample = {
    note: 'just a sample',
    character: 'clyde',
    nextObj: 'dot',
    currentIndex: 421,
    nextIndex: 401,
  };

  const handleCollision = (moves) => {
    moves.map((move) => {
      if (move.character === 'pacman') {
        // console.log(move);
        // console.log('pacman stuff');
        // console.log(move.nextObj);
        // console.log(move.currentIndex);
        // console.log(move.nextIndex);
        if (['wall', 'lair'].includes(move.nextObj)) {
          // console.log('wall');
        }
      }
      if (move.character === 'blinky') {
        // console.log('blinky stuff');
        // console.log(move.nextObj);
        // console.log(move.currentIndex);
        // console.log(move.nextIndex);
      }
    });
    return moves;
  };

  return { sample, handleCollision };
  // return { handleObjectInteraction, handleCollision, handleGhost };
};
export default useObjectInteraction;
