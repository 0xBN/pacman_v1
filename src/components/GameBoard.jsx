import { useContext } from 'react';
import GameContext from '../contexts/GameContext';
import { LEVEL1, OBJECT } from '../config/gameSettings';

import {
  BlankSpace,
  Wall,
  Dot,
  Ghost,
  Pill,
  Pacman,
  Lair,
} from './gameObjects';

const GameBoard = () => {
  const { inGame, objectNum, setObjectNum, boardArray, setBoardArray } =
    useContext(GameContext);

  const objectsMap = {
    blank: <BlankSpace />,
    wall: <Wall />,
    dot: <Dot />,
    blinky: <Ghost name='blinky' />,
    pinky: <Ghost name='pinky' />,
    inky: <Ghost name='inky' />,
    clyde: <Ghost name='clyde' />,
    pill: <Pill />,
    pacman: <Pacman />,
    lair: <Lair />,
  };

  const board = boardArray.map((square, index) => {
    let item = OBJECT[square];
    return (
      <div className={``} key={index}>
        {objectsMap[item]}
      </div>
    );
  });

  return (
    <div
      className={`border-4 h-[620px] w-[520px] grid grid-cols-20 `}
      onChange={() => console.log('hi')}
    >
      {board}
    </div>
  );
};
export default GameBoard;
