import { useEffect, useState } from 'react';

export interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
}

const SearchMode = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState<Country[] | null>(null);
  const [isError, setIsError] = useState<Error | null>(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/' + searchValue)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setIsError(error));
  }, [searchValue]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const filterData = () => {
    let filteredData = data;

    if (selectedOption === 'Alfabetycznie') {
      filteredData = filteredData?.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
    } else if (selectedOption === 'Po wielkości populacji') {
      filteredData = filteredData?.sort((a, b) => a.population - b.population);
    }

    return filteredData;
  };
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className="search-input"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginBottom: '10px',
        }}
      />
      <select
        name="sortowanie"
        id=""
        value={selectedOption}
        onChange={handleOptionChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginBottom: '10px',
        }}
      >
        <option value="">Sortowanie</option>
        <option value="Alfabetycznie">Alfabetycznie</option>
        <option value="Po wielkości populacji">Po wielkości populacji</option>
      </select>
      <div style={{ color: 'red' }}>{!isError && data?.message}</div>
      {data && data[0]?.name.common && data[0]?.flags.png && (
        <ul className="listContainer-tile">
          {!data ? (
            <li className="listElement-tile">No data available</li>
          ) : (
            filterData()?.map((country) => (
              <li key={country.name.common} className="listElement-tile">
                <p style={{ fontWeight: 'bold' }}>{country.name.common}</p>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  style={{ border: '1px solid black' }}
                />
                <p>{country.population}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchMode;
