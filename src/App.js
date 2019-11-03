import React,{ Component } from 'react';
import {CardList} from './component/card-list/card-list.component'
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
      <CardList avengers={this.state.avengers}>  
      </CardList>
    
      </div>
    );
  }
}

export default App;
