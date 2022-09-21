import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.setState);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}, I work n the {this.state.company} company.
          </p>
          <button onClick={() => {
            this. setState({ name: 'Pippo', company: 'Google', surname: 'James' })
            console.log(this.state.name)
            }}>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
