import React from 'react'
import Card from 'react-bootstrap/Card';

const Movie = (p) => {
    const {title,description,posterURL,rating}=p
  return (
      <Card style={{ width: '18rem' ,marginLeft:30}}>
          <Card.Img variant="top" src={posterURL} />
          <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                  {description}
              </Card.Text>
              <Card.Title>{rating}</Card.Title>
          </Card.Body>
      </Card>
  )
}

export default Movie