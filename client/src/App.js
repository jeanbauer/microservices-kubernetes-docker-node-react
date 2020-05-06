import React from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'

export default () => {
  return (
    <div className='container' style={{ marginTop: '40px' }}>
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  )
}
