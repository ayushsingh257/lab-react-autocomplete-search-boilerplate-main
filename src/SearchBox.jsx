// SearchBox.js
import React, { useState, useEffect } from 'react';
import countryData from '../countryData.json'; // Adjust the import path

function SearchBox() {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Filter countryData based on searchText
    const filteredSuggestions = countryData.filter(country =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setShowSuggestions(!!searchText); // Set showSuggestions to true only if searchText is not empty
  }, [searchText]);

  const handleInputChange = event => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      console.log('Escape');
      setSearchText('');
    }
  };

  const handleSuggestionClick = suggestion => {
    setSearchText(suggestion.name);
  };

  const handleSearchClick = () => {
    // Perform search operation here, if needed
    
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchClick}>Search</button>
      {showSuggestions && searchText !== '' && ( // Render suggestions only if searchText is not empty
        <ul className="suggestions">
          {suggestions.map(country => (
            <li key={country.code} onClick={() => handleSuggestionClick(country)}>
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
