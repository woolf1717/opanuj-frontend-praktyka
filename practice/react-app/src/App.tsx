import './App.css';

import GuessingMode from './components/GuessingMode';
import SearchMode from './components/SearchMode';
import SimpleAppChecklistAndTests from './components/SimpleAppChecklistAndTests/SimpleAppChecklistAndTests';
import TanstackMode from './components/TanstackMode';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('tanstack');

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
              value="tanstack"
              checked={mode === 'tanstack'}
              onChange={handleModeChange}
            />
            TanStack Query
          </label>
        </div>
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
          <label>
            <input
              type="radio"
              value="simpleAppChecklistAndTests"
              checked={mode === 'simpleAppChecklistAndTests'}
              onChange={handleModeChange}
            />
            Simple App Checklist and Tests
          </label>
        </div>
        {mode === 'tanstack' && <TanstackMode />}
        {mode === 'search' && <SearchMode />}
        {mode === 'guessing' && <GuessingMode />}
        {mode === 'simpleAppChecklistAndTests' && (
          <SimpleAppChecklistAndTests />
        )}
      </div>
    </>
  );
}

export default App;
