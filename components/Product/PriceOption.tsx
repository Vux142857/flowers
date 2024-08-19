'use client';
import React, { useState } from 'react';
import RadioButton from '../common/Radio';

const PriceOptions = () => {
  const [selectedOption, setSelectedOption] = useState('one-time');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="lg:text-subtitle text-mobile-subtitle">Price options</h4>
      <RadioButton
        id="one-time"
        label="One time purchase. Price $100"
        value="one-time"
        checked={selectedOption === 'one-time'}
        onChange={handleOptionChange}
      />
      <RadioButton
        id="subscribe"
        label="Subscribe now, and save 25% on this order."
        value="subscribe"
        checked={selectedOption === 'subscribe'}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default PriceOptions;
