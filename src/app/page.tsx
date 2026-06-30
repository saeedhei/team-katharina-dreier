import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-5xl p-8">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/ticket">
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle>Ticket</CardTitle>
              <CardDescription>Manage users and tickets</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">Go to the Ticket page.</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/democracy">
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle>Democracy</CardTitle>
              <CardDescription>Open the Democracy page</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">Go to the Democracy section.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  );
}
