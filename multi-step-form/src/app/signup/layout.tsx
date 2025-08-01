'use client';

import { SignupProvider } from '../context/SignupContext';

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SignupProvider>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {children}
        </div>
      </div>
    </SignupProvider>
  );
}