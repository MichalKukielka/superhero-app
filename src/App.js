import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import HeroesGrid from './components/superheroes/HeroesGrid';
import Search from './components/ui/Search';

const App = () => {

  const [heroes, setHeroes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const heroInfo = async (id) => {
      const hero = await axios(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/1618520148304501/search/${query}`);
      const result = JSON.parse(hero.request.responseText);
      setHeroes(result);
    };
    heroInfo();
  }, [query]);

  return (
    <div className="container">
      <Search getQuery={(query) => setQuery(query)} />
      <HeroesGrid heroes={heroes} />
    </div>
  );
}

export default App;
