// src\app\api\users\route.ts
import { NextResponse } from 'next/server';

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: 'Liam' },
  { id: 2, name: 'Sara' },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body: { name: string } = await req.json();

  const newUser: User = {
    id: users.length + 1,
    name: body.name,
  };

  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}
