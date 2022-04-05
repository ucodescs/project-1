import { Component } from 'react'

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Buttom } from '../../components/Buttom';
import { TextInput } from '../../components/TextInput';

class Home extends Component{
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPeerPage: 2,
    searchValue : ''
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

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
    
  }
  

  render(){
    const { posts, page, postPeerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPeerPage >= allPosts.length;
    const filteredPosts = !!searchValue ?
      allPosts.filter(_post => {
        return _post.title.toLowerCase().includes(searchValue.toLowerCase());
      }) :
      posts;
    return (
      <section className='container'>
        <div class="search-container">
          {!!searchValue && (
              <h1>Search value: {searchValue}</h1>
          )}
          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        </div>
        
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <p>Não existem posts:(</p>
        )}
        
        <div className='button-container'>
          {!searchValue && (
            <Buttom
            text="Load More Posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
            />
          )}
          
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
