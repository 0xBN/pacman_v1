import { useContext } from 'react';
import GameContext from '../contexts/GameContext';
import { direction, MOVE } from '../config/gameSettings';

const SettingsWindow = () => {
  const {
    inGame,
    winGame,
    pacLives,
    dotCount,
    pillCount,
    points,
    toggleGameStart,
    pacDirection,
    pacPosition,
    pacStatus,
    enemyStatus,
    blinkyStatus,
    pinkyStatus,
    inkyStatus,
    clydeStatus,
    allEnemyStatus,
  } = useContext(GameContext);
  return (
    <div className={`border-4 flex flex-col gap-4`}>
      <h2>SettingsWindow (Main State)</h2>
      <div>
        <h3>Current Game</h3>
        <p>inGame: {inGame ? 'CURRENTLY IN GAME' : 'NOT IN GAME'}</p>
        <p>Win Game: {winGame ? 'true' : 'false'}</p>
      </div>

      <div>
        <h3>Points</h3>
        <p>Points: {points}</p>
        <p>Remaining Dots: {dotCount}</p>
        <p>Remaining Pills: {pillCount}</p>
      </div>

      <div>
        <h3>Enemy</h3>
        {/* <p>mode: {enemyStatus.mode}</p> */}
        <hr />
        <p>blinky: {allEnemyStatus.blinky.mode}</p>
        <p>pinky: {allEnemyStatus.pinky.mode}</p>
        <p>inky: {allEnemyStatus.inky.mode}</p>
        <p>clyde: {allEnemyStatus.clyde.mode}</p>
      </div>

      <div>
        <h3>Pacman Status</h3>
        <p>Action: {pacStatus}</p>
        <p>Lives Remaining: {pacLives < 0 ? 'GAME OVER' : pacLives}</p>
        <p>Direction: {pacDirection?.direction}</p>
        <p>Pac X: {(pacPosition && pacPosition[0]) || null}</p>
        <p>Pac Y: {(pacPosition && pacPosition[1]) || null}</p>
      </div>

      <div>
        <h3>Buttons</h3>
        <p>Arrow Keys: move</p>
        <p>space: toggle pause</p>
        <p>c: continue after death</p>
        <p>r: restart game</p>
      </div>

      {/*  */}
      <button className={`border rounded-md`} onClick={toggleGameStart}>
        {inGame ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};
export default SettingsWindow;
