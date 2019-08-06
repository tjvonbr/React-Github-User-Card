import React from 'react';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: 'tjvonbr',
      userInfo: {}
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.currentUser}`)
      .then(response => { return response.json(); })  
      .then(response => { this.setState({ userInfo: response }) 
      })
      .catch(error => {
        console.log('We cannot fetch the information you\'re looking for at   the  moment.  Sorry.', error)
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Github Directory</h1>
        <h3>Current User: { this.state.userInfo.name }</h3>
        <UserCard userInfo={ this.state.userInfo } />
      </div>
    );
  }
}

export default App;
