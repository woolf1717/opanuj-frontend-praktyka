// Imię dłuższe niż 1 znak, bez znaków specjalnych

// Nazwisko dłuższe niż 1 znak, bez znaków specjalnych

// Email zgodny z formatem

// Switch musi być zaznaczony

// Dodaj walidację błędów do formularza.

// Przetestuj dostępność formularza za pomocą czytnika ekranowego (NVDA dla Windows, VoiceOver dla MacOS).

import React, { useState } from 'react';

import SwitchComponent from './SwitchComponent/SwitchComponent';

const FormWithSwitch = () => {
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsSwitchChecked(checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isSwitchChecked) {
      alert('You must consent to data processing.');
      return;
    }
    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      consent: formData.get('submit'),
    };
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center">
        <div className="pt-4">
          <label>
            First Name:
            <input type="text" name="firstName" required />
          </label>
        </div>
        <div className="pt-4">
          <label>
            Last Name:
            <input type="text" name="lastName" required />
          </label>
        </div>
        <div className="pt-4">
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
        </div>
        <div className="pt-4">
          <SwitchComponent
            isSwitchChecked={isSwitchChecked}
            setIsSwitchChecked={setIsSwitchChecked}
          />
        </div>
        <button className="max-w-40 " type="submit">
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default FormWithSwitch;
