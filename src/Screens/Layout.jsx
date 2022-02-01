import React from 'react';

import CreateUsers from '../Components/CreateUsers';
import UsersTable from '../Components/UsersTable';
export default function Layout() {
  return (
    <div>
      <CreateUsers />
      <UsersTable />
    </div>
  )
}
