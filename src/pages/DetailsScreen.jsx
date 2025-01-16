import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DetailsScreen.css';

const DetailsScreen = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="details-page">
      {/* Header with Home Icon and Search Bar */}
      <header className="details-header">
      <button className="home-button" onClick={() => navigate('/home')}>
          <img src="/splash1.png" alt="Home" className="home-icon" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              navigate(`/search?q=${e.target.value}`);
            }
          }}
        />
      </header>

      {/* Main Content */}
      <div className="details-container">
        <div className="details-left">
          <img src={movie.image?.original} alt={movie.name} className="details-image" />
        </div>
        <div className="details-right">
          <h1 className="details-title">{movie.name}</h1>
          <div className="details-info">
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
            <p><strong>Rating:</strong> {movie.rating?.average || 'N/A'}</p>
            <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
            <p><strong>Premiered:</strong> {movie.premiered}</p>
            <p><strong>Network:</strong> {movie.network?.name || 'N/A'}</p>
            <p><strong>Status:</strong> {movie.status}</p>
          </div>
          <div className="details-summary">
            <h2>Summary</h2>
            <p dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
