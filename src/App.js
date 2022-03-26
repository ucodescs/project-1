import { Component } from 'react'
import './App.css';

import { loadPosts } from './utils/load-posts';
import { Posts } from './components/Posts/index';

class App extends Component{
  state = {
      posts: []
  };
  
  loadPosts = async () => {
    const postAndPhotos = await loadPosts();
    this.setState({ posts: postAndPhotos })
  }

  async componentDidMount() {
    await this.loadPosts()
  }
  

  render(){
    const {posts} =this.state;
    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>
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
