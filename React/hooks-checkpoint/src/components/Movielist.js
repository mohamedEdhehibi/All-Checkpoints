import React from 'react'
import Movie from './Movie'
const Movielist = ({ movie }) => {
    console.log(movie );
  return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          {movie.map((ele) => (
              <Movie key={ele.title} {...ele} />
          ))}
      </div>
  )
}

export default Movielist