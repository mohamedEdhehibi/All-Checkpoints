// src/App.js
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import Map from "./components/Map"

const App = () => {
  return (
    <div>
      <header className="bg-dark text-white py-4">
        <Container>
          <h1>Google Maps: An amazing tool used every day!</h1>
        </Container>
      </header>
      <main>
        <Container className="py-5">
          <Row>
            <Col>
              <h2 className="mb-4">Explore the world with Google Maps</h2>
              <p className="lead">
                Discover new places, get directions, and find your way around
                with ease using Google Maps.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Map />
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="bg-dark text-white py-4">
        <Container>
          <p className="text-center"> Google Maps Landing Page</p>
        </Container>
      </footer>
    </div>
  )
}

export default App
