import React from "react";
import "./SearchBar.css";
import { useState } from "react";
function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  const handleChange = (e) => setCity(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(city);
    if (onSearch) {
      onSearch(city);
    }
    console.log("City searched for:", city);
  };

    return (
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search city"
              value={city}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;