import { useEffect, useState } from 'react';

import { Country } from './SearchMode';

const GuessingMode = () => {
  const [data, setData] = useState<Country[] | null>(null);

  const [isError, setIsError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [country, setCountry] = useState('');
  const [flag, setFlag] = useState('');
  const [hint, setHint] = useState(false);

  const [inputCountry, setInputCountry] = useState('');

  useEffect(() => {
    console.log('fetching data');
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => setIsError(error));
  }, []);

  useEffect(() => {
    handleRandomize();
  }, [data]);

  const handleCheck = () => {
    if (country === inputCountry) {
      alert('Success!');
    } else {
      alert('Incorrect!');
    }
  };

  const handleRandomize = () => {
    console.log();
    if (data !== null) {
      console.log(data.length);
      const randomIndex = Math.floor(Math.random() * data.length);
      setCountry(data[randomIndex].name.common);
      setFlag(data[randomIndex].flags.png);
      setIsLoading(false);
    }
  };
  return (
    <>
      {isError && <p>Something went wrong...</p>}
      {!isError && (
        <div className="guessingMode-container">
          {isLoading ? (
            <>Loading...</>
          ) : (
            <img src={flag} alt="Flag" style={{ marginTop: '12px' }} />
          )}
          <input
            type="text"
            value={inputCountry}
            onChange={(e) => setInputCountry(e.target.value)}
            style={{
              marginTop: '12px',
              border: '1px solid black',
              padding: '4px',
            }}
          />
          <div style={{ marginTop: '12px' }}>
            <button style={{ marginRight: '8px' }} onClick={handleCheck}>
              Sprawdź
            </button>
            <button onClick={handleRandomize}>Wylosuj ponownie</button>
          </div>
          <button
            onClick={() => setHint(!hint)}
            style={{
              marginTop: '12px',
              marginLeft: '40px',
              marginRight: '40px',
            }}
          >
            Open hint
          </button>
          {hint && <p style={{ marginTop: '12px' }}>{country}</p>}
        </div>
      )}
    </>
  );
};

export default GuessingMode;
