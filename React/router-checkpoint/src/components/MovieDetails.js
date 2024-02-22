// MovieDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const MovieDetails = ({ movieList }) => {
  const { title } = useParams();
  // Find the movie details based on the title
  const movieDetails = movieList.find(movie => movie.title === title);

  if (!movieDetails) {
    return <div>No movie details available</div>;
  }

  const { description,  rating,trailer  } = movieDetails;

  return (
    <div>
        <Link to="/"> <Button className="btn btn-success" style={{marginTop:10}}>Home</Button></Link>

      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      {/* Add more details as needed */}
      <iframe
        title={`${title} Trailer`}
         width="1280"
        height="720"
        src={trailer}

        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDetails;
