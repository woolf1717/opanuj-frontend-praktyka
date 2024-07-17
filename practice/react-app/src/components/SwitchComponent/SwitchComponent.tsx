import './SwitchComponent.css';

import React, { useState } from 'react';

const SwitchComponent = ({
  isSwitchChecked,
  setIsSwitchChecked,
}: {
  isSwitchChecked: boolean;
  setIsSwitchChecked: (checked: boolean) => void;
}) => {
  const toggleStatus = () => {
    setIsSwitchChecked(!isSwitchChecked);
  };

  const handleKeydown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleStatus();
    }
  };

  return (
    <div className="flex w-full justify-center items-center pt-4">
      <div
        role="switch"
        aria-checked={isSwitchChecked}
        tabIndex={0}
        onClick={toggleStatus}
        onKeyDown={handleKeydown}
      >
        <label>
          Consent to data processing:
          <span className="switch">
            <span></span>
          </span>
          <span className="on" aria-hidden="true">
            Wyłączony
          </span>
          <span className="off" aria-hidden="true">
            Włączony
          </span>
          <input
            type="hidden"
            name="submit"
            value={isSwitchChecked.toString()}
            required
          />
        </label>
      </div>
    </div>
  );
};

export default SwitchComponent;
