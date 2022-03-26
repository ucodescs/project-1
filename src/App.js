import './App.css';
import {Component} from 'react'

class App extends Component{
  state = {
      counter: 0,
      posts: [{
        id: 1,
        title: 'O titulo 1',
        body: 'o corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'o corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'o corpo 3'
      },]
  };
  
  timeOutUpdate = null;

  componentDidMount(){
    this.handleTimeOut()  
  }

  componentDidUpdate() {
    this.handleTimeOut()
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutUpdate);
  }


  handleTimeOut = () =>{
    const {posts, counter} = this.state;
    posts[0].title = 'Novo titulo';
    
    this.timeOutUpdate = setTimeout(() => {
      this.setState({posts, counter: counter+1});
    }, 1000);
  }
  
  render(){
    const {posts, counter} =this.state;
    
    return (
      <div className="App">
        <p>{counter}</p>
        {posts.map(post => (
          <div key={post.id}>
            <h1 >{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
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
