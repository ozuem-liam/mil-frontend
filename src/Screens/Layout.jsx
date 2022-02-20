import React from 'react';

import CreatePost from '../Components/CreatePosts';
import PostsTable from '../Components/PostsTable';
import ActorChart from '../Components/ActorChart';

export default function Layout({loading, posts, deletePost, errMsg, createPost}) {
  return (
    <div>
      <ActorChart />
      <CreatePost errMsg={errMsg} createPost={createPost} loading={loading}/>
      <PostsTable loading={loading} posts={posts} deletePost={deletePost}/>
    </div>
  )
}
