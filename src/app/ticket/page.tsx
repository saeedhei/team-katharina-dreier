// src/app/ticket/page.tsx

import UserList from './UserList';
import AddUserButton from './AddUserButton';

export type User = {
  id: number;
  name: string;
};

async function getUsers(): Promise<User[]> {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}

export default async function TicketPage() {
  const users = await getUsers();

  return (
    <div className="container mx-auto max-w-2xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Users</h1>

        <AddUserButton />
      </div>

      <UserList users={users} />
    </div>
  );
}
