import './App.css';
import Movielist from './components/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css'
import tabmovie from './source/Moviejson'
import Filter from './components/Filter';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

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
    
    <Router><Filter handlefilter={handleonchange} reset={reset} />
    <div className="App">
    <Routes>
  <Route path="/" element={<Movielist movie={filteredmovie} />} />
  <Route path=":title" element={<MovieDetails movieList={filteredmovie}/>} />
</Routes>
        </div>
  </Router>
  );
}

export default App;
