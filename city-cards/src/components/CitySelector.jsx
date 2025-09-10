import React from "react";

const CitySelector = ({ cities, onSelect }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <label htmlFor="city-select" style={{ marginRight: "10px" }}>
        Выберите город:
      </label>
      <select
        id="city-select"
        onChange={(e) => {
          const selectedCity = cities.find(
            (city) => city.name === e.target.value
          );
          onSelect(selectedCity);
        }}
        defaultValue=""
      >
        <option value="" disabled>
          -- Выберите город --
        </option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
