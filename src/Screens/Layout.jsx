import React from 'react';

import CreatePosts from '../Components/CreatePosts';
import PostsTable from '../Components/PostsTable';
export default function Layout() {
  return (
    <div>
      <CreatePosts />
      <PostsTable />
    </div>
  )
}
