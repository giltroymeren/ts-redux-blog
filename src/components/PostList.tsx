import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchPosts } from '../actions';

interface IPostListProps {
  fetchPosts: () => Promise<void>
}

const PostList = (props: IPostListProps) => {
  useEffect(() => {
    props.fetchPosts()
  }, [])

  return (
    <>
      <h2>Post List</h2>
    </>
  );
};

export default connect(
  null,
  { fetchPosts }
)(PostList);
