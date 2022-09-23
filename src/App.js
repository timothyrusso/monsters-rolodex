import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };

    console.log('1')
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
    console.log('3')
  }

  render() {
    console.log('2')
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
