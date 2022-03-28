import { Component } from 'react'

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Buttom } from '../../components/Buttom';

class Home extends Component{
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPeerPage: 10
  };
  
  loadPosts = async () => {
    const { page, postPeerPage } = this.state;
    const postAndPhotos = await loadPosts();
    this.setState({
      posts: postAndPhotos.slice(page,postPeerPage),
      allPosts: postAndPhotos
    })
  }

  loadMorePosts = () => {
    
    const { page, postPeerPage, posts, allPosts } = this.state;
    const nextPage = page + postPeerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postPeerPage);
    posts.push(...nextPost)
    this.setState({
      posts: posts,
      page: nextPage
    })
  }

  async componentDidMount() {
    await this.loadPosts()
  }
  

  render(){
    const { posts, page, postPeerPage, allPosts } = this.state;
    const noMorePosts = page + postPeerPage >= allPosts.length;
    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className='button-container'>
          <Buttom
            text="Load More Posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
            />
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

export default Home;
