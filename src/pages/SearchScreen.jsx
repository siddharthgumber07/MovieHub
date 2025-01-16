import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchScreen.css';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim()) {
      axios.get(`https://api.tvmaze.com/search/shows?q=${term}`)
        .then((response) => setResults(response.data))
        .catch((error) => console.error(error));
    } else {
      setResults([]);
    }
  };

  const handleHomeButtonClick = () => {
    navigate('/home');
  };

  return (
    <div className="search-container">
      <div className="search-bar-container">
        {/* Button with splash1.png image */}
        <button className="splash-button" onClick={handleHomeButtonClick}>
          <img src="/splash1.png" alt="Splash" className="splash-icon" />
        </button>

        {/* Search Bar */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for movies..."
          className="search-bar"
        />
      </div>

      {/* Results Grid */}
      <div className="results-grid">
        {results.map((item) => (
          <Link to={`/details/${item.show.id}`} key={item.show.id} className="result-card">
            <img src={item.show.image?.medium} alt={item.show.name} />
            <h3>{item.show.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
