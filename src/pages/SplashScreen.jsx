import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; 

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    setTimeout(() => {
      navigate('/home');
    }, 1500); 
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-logo">
        <img src="/splash1.png" alt="Splash Logo" className="zoom-logo" />
      </div>
    </div>
  );
};

export default SplashScreen;
