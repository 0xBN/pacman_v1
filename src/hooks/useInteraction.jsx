import { useContext, useState } from 'react';
import GameContext from '../contexts/GameContext';
import { useLoseLife } from './';
import {
  MOVE,
  ENEMY_STATUS,
  COOL_DOWN,
  OBJECT,
  OBJECT_TYPE,
} from '../config/gameSettings';

const useInteraction = () => {
  const {
    enemyStatus,

    pacPosition,
    setCharacterMoves,
    characterMoves,
    setPacDirection,
    setDotCount,
    setPoints,
    setPacStatus,
    setPillCount,
    setEnemyStatus,
    setAllEnemyStatus,
    boardArray,
  } = useContext(GameContext);

  const { loseLife } = useLoseLife();

  const handleWall = () => {
    console.log('handleWall');
  };

  const handleGhost = (ghost) => {
    if (enemyStatus.mode === 'scatter' || enemyStatus.mode === 'chasing') {
      setCharacterMoves((prev) => {
        const newCharacterMoves = characterMoves;
        newCharacterMoves.pacman = {
          nextObj: 'blank',
          currentIndex: 21,
          nextIndex: 22,
        };
        return newCharacterMoves;
      });
      setPacDirection(MOVE[3]);
      loseLife();
      // PUT GHOST IN PLACE OF PACMAN AND MOVE PACMAN TO START
    }
    if (enemyStatus.mode === 'frightened') {
      killGhost(ghost);
    }
  };

  const killGhost = (ghost) => {
    // 3,4,5,6: GHOSTS VULNERABLE: POINTS GHOSTS RESTART AT LAIR

    console.log('kill ghost', ghost);
  };

  const handleDot = () => {
    setDotCount((prev) => {
      const dotArray = boardArray.filter(
        (num) => num === OBJECT.indexOf(OBJECT_TYPE.DOT)
      );
      return dotArray.length;
    });
    setPoints((prev) => prev + 1);
  };
  const handlePill = () => {
    // EXTRA POINTS FOR PILL AND ENEMY BECOMES FRIGHTENED
    setDotCount((prev) => {
      const pillArray = boardArray.filter(
        (num) => num === OBJECT.indexOf(OBJECT_TYPE.PILL)
      );
      return pillArray.length;
    });
    setPillCount((prev) => prev - 1);
    setPoints((prev) => prev + 10);
    setAllEnemyStatus((prev) => {
      const allFrightened = {
        blinky: { mode: 'frightened' },
        pinky: { mode: 'frightened' },
        inky: { mode: 'frightened' },
        clyde: { mode: 'frightened' },
      };
      return allFrightened;
    });
    // ENEMY CAN BE EATEN FOR FEW SECONDS
    setTimeout(() => {
      setAllEnemyStatus((prev) => {
        const allScatter = {
          blinky: { mode: 'scatter' },
          pinky: { mode: 'scatter' },
          inky: { mode: 'scatter' },
          clyde: { mode: 'scatter' },
        };

        return allScatter;
      });
      setPacStatus('eating');
    }, COOL_DOWN.frightened);
  };

  return { handleWall, handleGhost, handleDot, handlePill };
};
export default useInteraction;
