import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import HeroesGrid from './components/superheroes/HeroesGrid';

const App = () => {

  const [heroes, setHeroes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const heroInfo = async () => {
      let cancel
      const hero = await axios(
        BASE_URL + query,
        { cancelToken: new axios.CancelToken(c => cancel = c)}
        );
      const result = JSON.parse(hero.request.responseText);
      setLoading(false)
      setHeroes(result);
      return () => cancel.cancel()
    };
    heroInfo();
  }, [query]);

  if(loading) {
    return (
      <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <h1 className="center">Loading</h1>
    </div>

    )
  }

  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <HeroesGrid heroes={heroes} />
    </div>
  );
}
 
export default App;
