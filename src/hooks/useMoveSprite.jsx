import { useContext, useState } from 'react';
import GameContext from '../contexts/GameContext';

import { coordToNum, numToCoord } from '../utils/helperFunctions';
import { OBJECT, MOVE, RESPAWN } from '../config/gameSettings';

const useMoveSprite = () => {
  const {
    blinkyPosition,
    pinkyPosition,
    inkyPosition,
    clydePosition,
    boardArray,
    pacPosition,
    setPacStatus,
    allEnemyStatus,
    setAllEnemyStatus,
  } = useContext(GameContext);

  const spriteNextMove = (name) => {
    const ghostPosition = {
      blinky: blinkyPosition,
      pinky: pinkyPosition,
      inky: inkyPosition,
      clyde: clydePosition,
    };

    const spritePosition = ghostPosition[name];
    if (name === 'blinky') {
      // console.log({ [name]: spritePosition }, { pac: pacPosition });
      // console.log('***', spritePosition === pacPosition);
    }

    // IF PACMAN AND GHOST INTERSECT
    if (
      Math.abs(pacPosition - spritePosition) < 2 ||
      pacPosition === spritePosition
    ) {
      if (['scatter', 'chasing'].includes(allEnemyStatus[name].mode)) {
        setPacStatus('dead');
        // console.log(allEnemyStatus[name]);
        // console.log(name, 'caught pacman at useMOVESPRITE');
      }

      if (['frightened'].includes(allEnemyStatus[name].mode)) {
        // console.log('pacman killed', name);
        setAllEnemyStatus((prev) => {
          const newStatus = allEnemyStatus;
          allEnemyStatus[name].mode = 'dead';
          return newStatus;
        });

        return { [name]: RESPAWN.level1[name] };
      }

      // IF PACMAN AND GHOST DON'T INTERSECT
    }
    // console.log(numToCoord(blinkyPosition));
    const currentIndex = spritePosition;
    const direction = checkAllDirections(currentIndex, name).shortestDirection;
    const directRoute = pathToPac(ghostPosition[name]);
    const nextIndex = getNextIndex(direction, currentIndex);
    const nextObject = OBJECT[boardArray[nextIndex]];
    // console.log(name, nextObject);

    return { [name]: { nextObject, currentIndex, nextIndex } };
  };

  /**
   * Helper
   * functions
   * below
   *
   *
   *
   *
   *
   */

  const pathToPac = (fromIndex) => {
    console.log('pathToPac start ******************');
    console.log('fromIndex', fromIndex);
    console.log('pacPosition', pacPosition);
    //
    console.log('pathToPac end ******************');
  };

  const checkAllDirections = (currentIndex, ghost) => {
    const distance = {
      up: validateDirection('up', currentIndex),
      down: validateDirection('down', currentIndex),
      left: validateDirection('left', currentIndex),
      right: validateDirection('right', currentIndex),
    };

    let arr = Object.values(distance).filter((i) => {
      // RANDOMIZE SPACE BETWEEN PACMAN AND CHARACTER
      const rndInt = Math.floor(Math.random() * 2);
      // console.log(rndInt);

      if (i < rndInt) return null;

      // FRIGHTENED MODE
      // if (i < 5) return null;

      // HIGHER NUM MEANS THEY RUN AWAY MORE

      // CLOSER TO 0 IS HUNTING DOWN PACMAN

      return i !== null;
    });
    let min = Math.min(...arr);
    let shortestDirection = Object.keys(distance).filter(
      (i) => distance[i] === min
    )[0];

    return { distance, shortestDirection };
  };

  const validateDirection = (direction, currentIndex) => {
    const nextIndex = getNextIndex(direction, currentIndex);

    // CHECK FOR WALL
    if (OBJECT[boardArray[nextIndex]] === 'wall') return null;

    // COMPARE ALL DISTANCES TO PACMAN
    return calculateDistanceBetween(
      numToCoord(nextIndex),
      numToCoord(pacPosition)
    );
  };

  // H DISTANCE HUERISTIC FUNCTION
  const calculateDistanceBetween = (coordinateSprite, coordinatePac) => {
    const xDistance = coordinateSprite[0] - coordinatePac[0];
    const yDistance = coordinateSprite[1] - coordinatePac[1];
    const totalDistance = Math.abs(xDistance) + Math.abs(yDistance);
    return totalDistance;
  };

  const getNextIndex = (direction, currentIndex) => {
    const moveDirection = MOVE.filter((i) => i.direction === direction);
    const nextIndex = currentIndex + moveDirection[0]?.count;
    return nextIndex;
  };

  return { spriteNextMove, validateDirection };
};
export default useMoveSprite;
