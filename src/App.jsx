import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import HomeScreen from './pages/HomeScreen';
import SearchScreen from './pages/SearchScreen';
import DetailsScreen from './pages/DetailsScreen';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/details/:id" element={<DetailsScreen />} />
    </Routes>
  );
};

export default App;
