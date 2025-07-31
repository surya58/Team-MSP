'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-gray-600 mb-8">Join us today with our simple signup process</p>
        <Link href="/signup/step1">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}