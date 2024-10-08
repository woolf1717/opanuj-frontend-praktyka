import './App.css';

import FormWithSwitch from './components/FormWithSwitch';
import GuessingMode from './components/GuessingMode';
import RickAndMorty from './components/RickAndMorty';
import SearchMode from './components/SearchMode';
import SimpleAppChecklistAndTests from './components/SimpleAppChecklistAndTests/SimpleAppChecklistAndTests';
import TanstackMode from './components/TanstackMode';
import { bookStaticList } from './components/SimpleAppChecklistAndTests/bookStaticList';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('formWithSwitch');

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
          <label>
            <input
              type="radio"
              value="rickandmorty"
              checked={mode === 'rickandmorty'}
              onChange={handleModeChange}
            />
            Rick and Morty
          </label>
          <label>
            <input
              type="radio"
              value="switchComponent"
              checked={mode === 'switchComponent'}
              onChange={handleModeChange}
            />
            Switch Component
          </label>
        </div>
        {mode === 'tanstack' && <TanstackMode />}
        {mode === 'search' && <SearchMode />}
        {mode === 'guessing' && <GuessingMode />}
        {mode === 'simpleAppChecklistAndTests' && (
          <SimpleAppChecklistAndTests bookList={bookStaticList} />
        )}
        {mode === 'rickandmorty' && <RickAndMorty />}
        {mode === 'formWithSwitch' && <FormWithSwitch />}
      </div>
    </>
  );
}

export default App;
