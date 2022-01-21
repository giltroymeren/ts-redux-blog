import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import PostList from './components/PostList'
import { fetchPosts } from './actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className="ui container">
      <h1>Blog</h1>

      <PostList />
    </div>
  );
}

export default App;

