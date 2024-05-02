import React, { useState } from 'react';
import './Autocomplete.css'; // Import CSS file for stylings

function Autocomplete() {
  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = ['Apple', 'Banana', 'Orange', 'Pear', 'Pineapple'];

  const handleChange = (event) => {
    setValue(event.target.value);
    setShowSuggestions(true);
  };

  const handleSelect = (selectedValue) => {
    setValue(selectedValue);
    setShowSuggestions(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      // If Escape key is pressed, clear the input field
      setValue('');
      setShowSuggestions(false);
    }
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type something..."
      />
      {showSuggestions && (
        <ul className="suggestions-list">
          {suggestions
            .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
            .map((item) => (
              <li key={item} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
