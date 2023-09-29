import React, { useState } from 'react';

const ColorFilter = ({ onFilterChange }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    onFilterChange(color); // Notify the parent component of the selected color
  };

  return (
    <div>
      <label htmlFor="color-filter">Select Marker Color:</label>
      <select id="color-filter" value={selectedColor} onChange={handleColorChange}>
        <option value="">All Colors</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        {/* Add options for other colors */}
      </select>
    </div>
  );
};

export default ColorFilter;
