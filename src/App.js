import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };

    console.log('constructor')
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
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' />
        {this.state.monsters.map((element) => {
          return (
            <div key={element.id}>
              <h1>{element.name}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
