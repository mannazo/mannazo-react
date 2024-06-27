import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const CountryRegionSelector = ({ onCountryRegionChange }) => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const selectCountry = (val) => {
    setCountry(val);
    setRegion(''); // Reset region when country changes
    onCountryRegionChange(val, ''); // Notify parent of country change
  };

  const selectRegion = (val) => {
    setRegion(val);
    onCountryRegionChange(country, val); // Notify parent of region change
  };

  return (
    <div>
      <CountryDropdown
        value={country}
        onChange={selectCountry}
        showDefaultOption={true}
        defaultOptionLabel='Select a country'
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={selectRegion}
        showDefaultOption={true}
        defaultOptionLabel='Select a region'
      />
    </div>
  );
};

export default CountryRegionSelector;
