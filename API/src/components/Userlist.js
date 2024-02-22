import React, { useEffect, useState } from "react"
import axios from "axios"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useNavigate } from "react-router-dom"

const userurl = "https://jsonplaceholder.typicode.com/users"
const Userlist = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios
      .get(userurl)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(users)

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <Card style={{ width: 500 }} className="m-2 ">
            <Card.Header>{user.id}</Card.Header>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>Company : {user.company.name}</Card.Text>
              <Button onClick={()=>navigate(`/${user.id}`)} variant="primary">
                More Details
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  )
}

export default Userlist
