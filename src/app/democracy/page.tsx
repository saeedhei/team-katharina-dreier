// src\app\democracy\page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DemocracyPage() {
  return (
    <main className="container mx-auto max-w-4xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>Fake News Awareness</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Watch this short video to learn how to identify fake news and misinformation on social
            media.
          </p>

          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Fake News Awareness"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
