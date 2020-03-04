import React, { Component, Fragment } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user =>
        this.setState({
          robots: user
        }));
  }

  onSearchChange = event => {
    this.setState({
      searchfield: event.target.value,
    });
  }

  render() {
    const { robots, searchfield } = this.state;
    const robotfiltered = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    )
    return !robots.length ? <h1 className="tc">Loading</h1> : (
      <Fragment>
        <div className="tc">
          <h1 className="ttu f1">Robofriends</h1>
          <SearchBox SearchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={robotfiltered} />
            </ErrorBoundry>
          </Scroll>
        </div>
      </Fragment>
    );
  }
}

export default App;