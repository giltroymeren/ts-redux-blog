import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchPosts, IPost } from '../actions';
import { IPostState } from '../reducers/postReducer';

interface IPostListProps {
  posts: IPost[]
  fetchPosts: () => Promise<void>
}

const PostList: React.FC<IPostListProps> = ({
  posts,
  fetchPosts
}) => {
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <h2>Post List</h2>

      <div className="ui relaxed divided list">
        {posts.length && posts.map((post: IPost) => (
          <div className='item'
            key={post.id}>
            <i className='large middle aligned icon user'></i>
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state: IPostState) => {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
