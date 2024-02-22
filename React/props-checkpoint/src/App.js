import logo from './logo.svg';
import './App.css';
import Player from './Player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playerlist from './Playerlist';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">

      <h1>list players</h1>
      <Playerlist />

    </div>
  );
}

export default App;