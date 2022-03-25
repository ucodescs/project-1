import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class App extends Component{
  state ={
      name: 'Renato Ribeiro',
      counter: 0
    };
  

  handlePClick = (event) =>{
    this.setState({name: 'Renato Miguel da Cruz Ribeiro'});
  }

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1 });
  }

  render(){
    const {name, counter} =this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          
          <a
          onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link {counter}
          </a>
        </header>
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
