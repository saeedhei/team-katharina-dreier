// src/app/ticket/UserList.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { User } from './page';

type Props = {
  users: User[];
};

export default function UserList({ users }: Props) {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <Card key={user.id}>
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
          </CardHeader>

          <CardContent>
            <p>ID: {user.id}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
