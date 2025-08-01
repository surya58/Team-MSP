'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SignupData, SignupContextType } from '../types/signup';

const initialData: SignupData = {
  fullName: '',
  email: '',
  phone: '',
  streetAddress: '',
  city: '',
  state: '',
  postalCode: '',
  bio: '',
};

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export function SignupProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SignupData>(initialData);

  const updateData = (field: keyof SignupData, value: string) => {
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetData = () => {
    setData(initialData);
  };

  return (
    <SignupContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </SignupContext.Provider>
  );
}

export function useSignupContext() {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error('useSignupContext must be used within a SignupProvider');
  }
  return context;
}