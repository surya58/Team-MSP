'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-2">Welcome to Our Platform</CardTitle>
          <CardDescription className="text-lg">Join us today with our simple signup process</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Link href="/signup/step1">
            <Button size="lg" className="w-full">Get Started</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}