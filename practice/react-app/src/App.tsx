import './App.css';

import GuessingMode from './components/GuessingMode';
import SearchMode from './components/SearchMode';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('search');

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value);
  };

  return (
    <>
      <div className="app-container">
        <div>
          <label>
            <input
              type="radio"
              value="search"
              checked={mode === 'search'}
              onChange={handleModeChange}
            />
            Search Mode
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="guessing"
              checked={mode === 'guessing'}
              onChange={handleModeChange}
            />
            Guessing Mode
          </label>
        </div>
        {mode === 'search' && <SearchMode />}
        {mode === 'guessing' && <GuessingMode />}
      </div>
    </>
  );
}

export default App;
