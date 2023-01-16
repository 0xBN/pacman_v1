import { createContext, useState, useEffect } from 'react';
import {
  ACTIONS,
  GAME_SETTING,
  ALLOWED_KEYS,
  MOVE,
  LEVEL1,
} from '../config/gameSettings';

const GameContext = createContext({});

export const GameProvider = ({ children }) => {
  // GAME
  const [inGame, setInGame] = useState(false);
  const [winGame, setWinGame] = useState(false);

  // PACMAN
  // EATING, CHASING, DEAD
  const [pacStatus, setPacStatus] = useState('eating');
  const [pacPosition, setPacPosition] = useState(21);
  const [pacDirection, setPacDirection] = useState(MOVE[3]);
  const [pacLives, setPacLives] = useState(GAME_SETTING.lives);

  // POINTS
  const [dotCount, setDotCount] = useState(0);
  const [pillCount, setPillCount] = useState(0);
  const [points, setPoints] = useState(0);

  // ENEMY: BLINKY, PINKY, INKY, CLYDE

  const [allEnemyStatus, setAllEnemyStatus] = useState({
    blinky: { mode: 'scatter' },
    pinky: { mode: 'scatter' },
    inky: { mode: 'scatter' },
    clyde: { mode: 'scatter' },
  });
  const [enemyStatusChange, setEnemyStatusChange] = useState(0);
  const [enemyPosition, setEnemyPosition] = useState([6, 4]);

  // SCATTER, FRIGHTENED, CHASING, DEAD
  // const [blinkyStatus, setBlinkyStatus] = useState({ mode: 'scatter' });
  // const [pinkyStatus, setPinkyStatus] = useState({ mode: 'scatter' });
  // const [inkyStatus, setInkyStatus] = useState({ mode: 'scatter' });
  // const [clydeStatus, setClydeStatus] = useState({ mode: 'scatter' });

  const [blinkyQueue, setBlinkyQueue] = useState([]);
  const [pinkyQueue, setPinkyQueue] = useState([]);
  const [ghostQueue, setGhostQueue] = useState({
    blinky: [],
    pinky: [],
    inky: [],
    clyde: [],
  });

  const [blinkyPosition, setBlinkyPosition] = useState(188);
  const [pinkyPosition, setPinkyPosition] = useState(191);
  const [inkyPosition, setInkyPosition] = useState(251);
  const [clydePosition, setClydePosition] = useState(248);

  // Board State
  const [boardArray, setBoardArray] = useState(LEVEL1);
  const [boardObjectCounts, setBoardObjectCounts] = useState();
  const [characterMoves, setCharacterMoves] = useState({
    pacman: {},
    blinky: {},
    pinky: {},
    inky: {},
    clyde: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  // TEST STATE
  const [timer, setTimer] = useState(0);
  const [frames, setFrames] = useState(0);
  const [objectNum, setObjectNum] = useState(0);

  const toggleGameStart = () => setInGame(!inGame);

  const resetGame = () => {
    // USE HOTKEY R
    // SET PACMAN TO START GAME_SETTING.pacStart
    // SET GHOSTS TO START
    // SET GHOSTS TO SCATTER MODE
    // SET BOARD TO LEVEL
    // SET POINTS TO 0
    // SET LIVES TO 3
    // SET PACSTATUS TO EATING
    // SET INGAME TO FALSE
    // SET WIN GAME TO FALSE / LOSE GAME
  };

  useEffect(() => {
    const countObjects = (array) =>
      array.reduce(
        (total, current) => (
          (total[current] = (total[current] || 0) + 1), total
        ),
        {}
      );

    countObjects(LEVEL1);
    setDotCount(countObjects(LEVEL1)[2]);
    setPillCount(countObjects(LEVEL1)[7]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleEvent = (e) => {
      const { keyCode } = e;

      if (!ALLOWED_KEYS.includes(keyCode)) return;

      if (keyCode === ACTIONS.c) {
        if (pacStatus !== 'dead') return;
        if (pacLives < 0) return;
        console.log('reviving');
        setPacStatus('eating');
        setInGame(!inGame);
      }

      if (keyCode === ACTIONS.spacebar) {
        if (pacStatus === 'dead') return;
        toggleGameStart();
        setPacStatus('eating');
      } else {
        if (!inGame) return;
        let x = MOVE.filter((i) => i.code === keyCode)[0];
        setPacDirection(x);
      }
    };
    document.addEventListener('keydown', handleEvent);
    return () => document.removeEventListener('keydown', handleEvent);
  });

  // useEffect(() => {
  //   let tick;
  //   if (inGame) {
  //     tick = setInterval(() => {
  //       setTimer((prev) => prev + 1);
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(tick);
  //   };
  // }, [setTimer, inGame]);

  return (
    <GameContext.Provider
      value={{
        inGame,
        setInGame,
        toggleGameStart,
        winGame,
        setWinGame,
        pacStatus,
        setPacStatus,
        pacPosition,
        setPacPosition,
        pacLives,
        setPacLives,
        dotCount,
        setDotCount,
        pillCount,
        setPillCount,
        points,
        setPoints,
        pacDirection,
        setPacDirection,
        timer,
        setTimer,
        frames,
        setFrames,
        objectNum,
        setObjectNum,
        boardArray,
        setBoardArray,
        enemyPosition,
        setEnemyPosition,
        blinkyPosition,
        setBlinkyPosition,
        pinkyPosition,
        setPinkyPosition,
        inkyPosition,
        setInkyPosition,
        clydePosition,
        setClydePosition,
        enemyStatusChange,
        setEnemyStatusChange,
        // blinkyStatus,
        // setBlinkyStatus,
        // pinkyStatus,
        // setPinkyStatus,
        // inkyStatus,
        // setInkyStatus,
        // clydeStatus,
        // setClydeStatus,
        boardObjectCounts,
        setBoardObjectCounts,
        characterMoves,
        setCharacterMoves,
        isLoading,
        blinkyQueue,
        setBlinkyQueue,
        allEnemyStatus,
        setAllEnemyStatus,
        ghostQueue,
        setGhostQueue,
        pinkyQueue,
        setPinkyQueue,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
