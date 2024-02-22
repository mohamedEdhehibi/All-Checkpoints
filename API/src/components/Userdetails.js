import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from "react-bootstrap/Card"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, ListGroup } from "react-bootstrap"

const Userdetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState()
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error))
  }, [])
  console.log(user)
  return (
    <>
      {user ? (
        <Card style={{ width: "500px" }} className="m-2">
          <Card.Header>
            <Card.Title>
              <strong>{user.company.name}</strong>
            </Card.Title>
            <Card.Text>{user.company.catchPhrase}</Card.Text>
          </Card.Header>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Owner: <strong>{user.name}</strong>
            </ListGroup.Item>

            <ListGroup.Item>
              Address:
              <strong>
                {user.address.street}, {user.address.city}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Email: <strong>{user.email}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Phone: <strong>{user.phone}</strong>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body >
            <Card.Link href={`http://${user.website}`}>Website</Card.Link>
            <Card.Link href="/">Back</Card.Link>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default Userdetails
