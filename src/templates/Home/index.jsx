import { useEffect, useState, useCallback } from 'react'

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postPeerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postPeerPage >= allPosts.length;
  
  const filteredPosts = !!searchValue ?
      allPosts.filter(_post => {
        return _post.title.toLowerCase().includes(searchValue.toLowerCase());
      }) :
      posts;
  
  const handleLoadPosts = useCallback(async (page, postPeerPage) => {
    const postAndPhotos = await loadPosts();
    setPosts(postAndPhotos.slice(page, postPeerPage));
    setAllPosts(postAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postPeerPage);
  }, [handleLoadPosts,  postPeerPage]);
  
  const loadMorePosts = () => {
    const nextPage = page + postPeerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postPeerPage);
    posts.push(...nextPost)
    setPosts(posts);
    setPage(nextPage);
  }
    
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }
  
  return (
    <section className='container'>
      <div className="search-container">
        {!!searchValue && (
            <h1>Search value: {searchValue}</h1>
        )}
        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>
      
      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}
      {filteredPosts.length === 0 && (
        <p>Não existem posts:(</p>
      )}
      
      <div className='button-container'>
        {!searchValue && (
          <Button
          text="Load More Posts"
          onClick={loadMorePosts}
          disabled={noMorePosts}
          />
        )}
        
      </div>  
    </section>
  );
}

export default Home;
