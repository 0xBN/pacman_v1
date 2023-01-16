import { useContext } from 'react';
import GameContext from '../contexts/GameContext';
import { MOVE, OBJECT, RESPAWN } from '../config/gameSettings';
import { useInteraction } from '.';

const useUpdateBoard = () => {
  const {
    setPacDirection,
    boardArray,
    setBoardArray,
    setPacPosition,
    characterMoves,
    setCharacterMoves,
    setBlinkyPosition,
    blinkyQueue,
    setBlinkyQueue,
    pacLives,
    setInGame,
    setPacLives,
    inGame,
    pacStatus,
    allEnemyStatus,
    blinkyStatus,
    setPinkyQueue,
    pinkyQueue,
    setPinkyPosition,
  } = useContext(GameContext);

  const { handleDot, handlePill } = useInteraction();

  const updateBoard = () => {
    if (!inGame) return;

    const newBoardArray = [...boardArray];

    const {
      nextObject: pNextObject,
      currentIndex: pCurrentIndex,
      nextIndex: pNextIndex,
    } = characterMoves.pacman;

    const pacmanObject = OBJECT.indexOf('pacman');
    const blankObject = OBJECT.indexOf('blank');
    const lairObject = OBJECT.indexOf('lair');

    // PACMAN AND SPRITE INTERACTION
    if (pacStatus === 'dead') {
      if (pacLives < 0) {
        setInGame(false);
        console.log('GAME OVER');
      }
      console.log('pac is dead');
      setInGame(false);
      setCharacterMoves((prev) => {
        const newCharacterMoves = characterMoves;
        newCharacterMoves.pacman = RESPAWN.level1.pacman;
        return newCharacterMoves;
      });
      setPacDirection(MOVE[3]);
      setPacLives((prev) => prev - 1);
      return;
    }

    // WALLS
    if (['wall', 'lair'].includes(pNextObject)) {
      newBoardArray[pCurrentIndex] = pacmanObject;
      setPacPosition(pCurrentIndex);
    }

    // PACMAN DOTS, PILLS, BLANKSPACE
    else {
      if (pNextObject === 'dot') handleDot();
      if (pNextObject === 'pill') handlePill();
      newBoardArray[pCurrentIndex] = blankObject;
      newBoardArray[pNextIndex] = pacmanObject;
      setPacPosition(pNextIndex);
    }

    // handle lair, if defined lair area is blank then put lairobject there
    const lairArray = [
      188, 189, 190, 191, 208, 209, 210, 211, 228, 229, 230, 231, 248, 249, 250,
      251,
    ];

    lairArray.forEach((spot) => {
      if (newBoardArray[spot] !== lairObject) {
        newBoardArray[spot] = lairObject;
      }
    });

    /**
     * BLINKY STUFF BELOW
     */
    const {
      nextObject: bNextObject,
      currentIndex: bCurrentIndex,
      nextIndex: bNextIndex,
    } = characterMoves?.blinky;

    const blinkyObject = OBJECT.indexOf('blinky');

    let bPreviousObject = OBJECT.indexOf(blinkyQueue[0]);
    bPreviousObject =
      blinkyQueue[0] === 'pacman' ? blankObject : bPreviousObject;

    if (!isNaN(bNextIndex)) {
      setBlinkyQueue((prev) => {
        if (!bNextObject) return [...prev];
        return [bNextObject, ...prev];
      });

      if (allEnemyStatus['blinky'].mode !== 'dead') {
        newBoardArray[bNextIndex] = blinkyObject;

        if (!blinkyQueue.length) {
          newBoardArray[bCurrentIndex] = lairObject;
        } else {
          newBoardArray[bCurrentIndex] = bPreviousObject;
        }
        setBlinkyPosition(bNextIndex);
      } else {
        setBlinkyPosition(248);
      }
    }

    /**
     * BLINKY STUFF ABOVE
     */

    /**
     * PINKY STUFF BELOW
     */

    // const {
    //   nextObject: pinkyNextObject,
    //   currentIndex: pinkyCurrentIndex,
    //   nextIndex: pinkyNextIndex,
    // } = characterMoves?.pinky;

    // const pinkyObject = OBJECT.indexOf('blinky');

    // let pinkyPreviousObject = OBJECT.indexOf(pinkyQueue[0]);
    // pinkyPreviousObject =
    //   pinkyQueue[0] === 'pacman' ? blankObject : pinkyPreviousObject;

    // if (!isNaN(pinkyNextIndex)) {
    //   setPinkyQueue((prev) => {
    //     if (!pinkyNextObject) return [...prev];
    //     return [pinkyNextObject, ...prev];
    //   });

    //   newBoardArray[pinkyNextIndex] = pinkyObject;

    //   if (!pinkyQueue.length) {
    //     newBoardArray[pinkyCurrentIndex] = lairObject;
    //   } else {
    //     newBoardArray[pinkyCurrentIndex] = pinkyPreviousObject;
    //   }
    //   setPinkyPosition(pinkyNextIndex);
    // }

    /**
     * PINKY STUFF ABOVE
     */

    // console.log(characterMoves);

    setBoardArray(newBoardArray);
  };

  return { updateBoard };
};
export default useUpdateBoard;
