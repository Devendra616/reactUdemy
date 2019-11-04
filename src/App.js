import React,{ Component } from 'react';
import {CardList} from './component/card-list/card-list.component'
import './App.css';
import { SearchBox } from './component/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      avengers: [ ],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({avengers : users})); //set avengers array with new users fetched from url
  }

  render() {

    const {avengers, searchField} = this.state;
    const filteredAvengers = avengers.filter( avenger => avenger.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
      <SearchBox placeholder = 'Search Avengers'  handleChange = {e=> this.setState({ searchField: e.target.value})} ></SearchBox>
      <CardList avengers={filteredAvengers} >  
      </CardList>
    
      </div>
    );
  }
}

export default App;
