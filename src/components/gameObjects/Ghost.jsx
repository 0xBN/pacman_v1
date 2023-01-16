import { useContext } from 'react';
import GameContext from '../../contexts/GameContext';

const Ghost = ({ name }) => {
  const { allEnemyStatus } = useContext(GameContext);
  if (!name) return;

  const ghostColor = {
    blinky: 'bg-red-500',
    pinky: 'bg-pink-500',
    inky: 'bg-cyan-500',
    clyde: 'bg-orange-500',
  };

  const color =
    allEnemyStatus[name].mode === 'frightened'
      ? 'bg-blue-600 animate-pulse '
      : ghostColor[name];

  const leftEye = `before:absolute before:bg-white before:w-2 before:h-3 before:rounded-full before:top-1/4 before:-translate-y-1/4 before:translate-x-1/4`;

  const rightEye = `after:absolute after:bg-white after:w-2 after:h-3 after:rounded-full after:top-1/4 after:right-0 after:-translate-y-1/4 after:-translate-x-1/4`;

  const leftPupil = `before:absolute before:bg-black before:w-2 before:h-2 before:rounded-full before:top-1/4 before:-translate-y-1/6 before:translate-x-1/4`;

  const rightPupil = `after:absolute after:bg-black after:w-2 after:h-2 after:rounded-full after:top-1/4 after:-translate-y-1/6 after:translate-x-[8px] after:z-10`;

  const mouth = `before:absolute before:bg-black before:w-[10px] before:h-[6px] before:rounded-full before:-translate-y-[8px] before:translate-x-[7px] before:z-10`;

  // Going left pupil

  // Going up pupil

  // Going right pupil

  // Going down pupil

  return (
    <div
      className={`relative rounded-tr-xl rounded-tl-xl border border-white/50 ${color} ${leftEye} ${rightEye} ${
        false && leftPupil
      } text-transparent`}
    >
      <div className={`absolute ${leftPupil} ${rightPupil}`}>.</div>.
      <div className={`absolute ${mouth}`}>.</div>
    </div>
  );
};
export default Ghost;
