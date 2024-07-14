import FlightForm from './components/FlightForm';
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <>
      <FlightForm />
    </>
  );
}
