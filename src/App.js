import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.css';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user => this.setState({ monsters: user }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">

        <div className="row">

          <div className="col-md-12 text-center">
            <h1>Monster Rolodex</h1>
            <SearchBox placeholder="search monster" handleChange={this.handleChange} />
            <CardList monsters={filterMonsters} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
