import './App.css';
import { Component } from 'react'
import { PostCard } from './components/PostCard/index';

class App extends Component{
  state = {
      posts: []
  };
  
  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, photos] = await Promise.all([postsResponse, photoResponse]);

    const postsJson = await posts.json();
    const photoJson = await photos.json();

    const postAndPhotos = postsJson.map((post, index) => {
      return {...post, cover:photoJson[index].url}
    });

    this.setState({
      posts: postAndPhotos
    })
  }


  componentDidMount() {
    this.loadPosts()
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }
  
  render(){
    const {posts} =this.state;
    
    return (
      <section className='container'>
        <div className="posts">
        {posts.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            cover={post.cover}
            />
        ))}
      </div>
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
