import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchPosts, IPost } from '../actions';
import UserHeader from './UserHeader'
import { IRootState } from '../reducers';

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
  })

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

              <UserHeader userId={post.userId} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
