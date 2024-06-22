import React, { useState } from 'react';
import { addition, division, multiplication, subtraction } from './functions';

import CountingButton from './Button';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const calculate = (func: (a: number, b: number) => number) => {
    setResult(func(numA, numB));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numA}
          onChange={(e) => setNumA(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numB}
          onChange={(e) => setNumB(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <CountingButton onClick={() => calculate(addition)}>+</CountingButton>
        <CountingButton onClick={() => calculate(subtraction)}>
          -
        </CountingButton>
        <CountingButton onClick={() => calculate(multiplication)}>
          *
        </CountingButton>
        <CountingButton onClick={() => calculate(division)}>/</CountingButton>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
