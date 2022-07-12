import React, { Component } from 'react';
import CardList from './Components/CardList';
import { robots } from './Components/robots';
import SearchBox from './Components/SearchBox';
import ErrorBoundry from './Components/ErrorBoundy';
import './CSS/App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <scroll>
          <ErrorBoundry>
            <CardList robots={filterRobots} />;
          </ErrorBoundry>
        </scroll>
      </div>
    );
  }
}

export default App;
