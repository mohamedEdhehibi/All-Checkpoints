import React, { Component } from 'react';
import './App.css';
export class App extends Component {
  state = {
    person: {
      name: `Person_${Math.floor(Math.random() * 1000)}`,
      age: Math.floor(Math.random() * 48) + 18,
      bio: 'This is a randomly generated bio ',
      occupation: `Occupation_${Math.floor(Math.random() * 10)}`,

      shows: false,
    },
    timeInterval: 0, // Added state for time interval
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((state) => ({
        timeInterval: state.timeInterval + 1, // Update time interval every second
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear interval when component unmounts
  }

  handleToggle = () => {
    this.setState((state) => ({
      person: {
        ...state.person,
        shows: !state.person.shows, // Toggle show state
      },
    }));
  };

  render() {
    const { person, timeInterval } = this.state;

    return (
      <div className='App'>
        <button onClick={this.handleToggle}>
          {person.shows ? 'Hide' : 'Show'}
        </button>
        {person.shows && (
          <div>
            <h2>{person.name}</h2>
            <p>Bio: {person.bio}</p>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
          </div>
        )}
        <p>Time since mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;