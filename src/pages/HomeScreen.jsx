import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HomeScreen.css';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home-page">
      {/* Header with Home Icon and Search Bar */}
      <header className="home-header">
        <button className="home-button" onClick={() => navigate('/home')}>
          <img src="/splash1.png" alt="Home" className="home-icon" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          onFocus={() => navigate('/search')}
        />
      </header>

      {/* Movie Cards */}
      <div className="movie-cards">
        {movies.map((movie) => (
          <div
            key={movie.show.id}
            className="movie-card"
            onClick={() => navigate(`/details/${movie.show.id}`)}
          >
            <img src={movie.show.image?.medium} alt={movie.show.name} className="movie-card-image" />
            <div className="movie-card-details">
              <h3>{movie.show.name}</h3>
              {/* Displaying a truncated summary */}
              <p>{movie.show.summary.replace(/(<([^>]+)>)/gi, "").slice(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
