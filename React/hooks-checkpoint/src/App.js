import './App.css';
import Movielist from './components/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css'
import tabmovie from './source/Moviejson'
import Filter from './components/Filter';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState(tabmovie)
  const [filter, setFilter] = useState({ title: '', rating: '' })
  const reset = () => (
    setFilter({ title: '', rating: '' })
  )
  const handleonchange = (type, value) => {
    setFilter({ ...filter, [type]: value })
    console.log(filter);
  }

  const filteredmovie = movies.filter(film => {
    return (film.title.toLowerCase().includes(filter.title.toLowerCase())
      && String(film.rating).includes(filter.rating))
  })
  return (
    <div className="App">
      <Filter handlefilter={handleonchange} reset={reset} />
      <Movielist movie={filteredmovie} />
    </div>
  );
}

export default App;
