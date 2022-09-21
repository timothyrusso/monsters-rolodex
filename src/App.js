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
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {this.state.monsters.map((element) => {
          return <h1 key={element.id}>{element.name}</h1>
        })}
        </header>
      </div>
    );
  }
}

export default App;
