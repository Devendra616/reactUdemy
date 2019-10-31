import React,{ Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      avengers: [ ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({avengers : users})); //set avengers array with new users fetched from url
  }

  render() {
    return (
      <div className="App">
      { this.state.avengers.map(avenger => (
        <h1 key={avenger.id}> {avenger.name}</h1>
      ))}
      </div>
    );
  }
}

export default App;
