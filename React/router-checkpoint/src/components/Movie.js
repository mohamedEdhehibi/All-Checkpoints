// Movie.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Movie = ({ title, description, posterURL, rating }) => {

  return (
    <Card style={{ width: '18rem', marginLeft: 30 }}>
    <Link to={`/${title}`}>
  <Card.Img variant="top" src={posterURL} />
</Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
