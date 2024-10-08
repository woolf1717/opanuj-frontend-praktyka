import { useState } from 'react';

export const Hints = () => {
  const hints = [
    'Ogórek i Rick połączeni w jedno',
    'Hasło to dwa słowa, drugie to imię',
    'Ogórek po angielsku to Pickle',
  ];

  const [currentHintIndex, setCurrentHintIndex] = useState(-1);

  const showNextHint = () => {
    setCurrentHintIndex((prevHintIndex) =>
      prevHintIndex === -1 ? 0 : (prevHintIndex + 1) % hints.length
    );
  };

  return (
    <section>
      <h2>Masz problem ze zgadnięciem hasła? Skorzystaj z podpowiedzi.</h2>
      <div
        className="text-green-500 mt-1 h-6"
        data-testid="hint-text"
        aria-live="polite"
        aria-atomic="true"
        role="alert"
      >
        {currentHintIndex !== -1 ? `${hints[currentHintIndex]}` : ''}
      </div>
      <button
        onClick={showNextHint}
        className="mt-2 bg-violet-600 text-white p-2 rounded hover:bg-violet-700"
      >
        Pokaż podpowiedź
      </button>
    </section>
  );
};
