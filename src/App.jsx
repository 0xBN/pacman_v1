import { useState, useContext } from 'react';
import GameContext from './contexts/GameContext';
import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';
import TestCanvas from './components/TestCanvas';
import SettingsWindow from './components/SettingsWindow';
import Tester from './components/Tester';
import GameLoop from './components/GameLoop';

function App() {
  const { clickStartGame } = useContext(GameContext);

  return (
    <div className='bg-black text-white min-h-screen flex justify-evenly items-center'>
      {/* <GameProvider> */}
      <div className={`flex flex-col items-center`}>
        <ScoreBoard />
        <GameBoard />
      </div>
      <div>
        <SettingsWindow />
        <GameLoop />
        {/* <Tester /> */}
      </div>

      {/* <TestCanvas /> */}
      {/* </GameProvider> */}
    </div>
  );
}

export default App;
