'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { TextField } from '@/components/TextField';
import { StepIndicator } from '@/components/StepIndicator';
import { useSignupForm } from '../../hooks/useSignupForm';
import { ValidationErrors } from '../../types/signup';

export default function Step1() {
  const router = useRouter();
  const { data, updateData, validateStep1 } = useSignupForm();
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleNext = () => {
    const validationErrors = validateStep1();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      router.push('/signup/step2');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <StepIndicator currentStep={1} totalSteps={3} />
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Personal Information</h1>
        <p className="text-gray-600">Please provide your basic information to get started</p>
      </div>

      <div className="space-y-4 mb-8">
        <TextField
          label="Full Name"
          value={data.fullName}
          onChange={(value) => updateData('fullName', value)}
          placeholder="Enter your full name"
          error={errors.fullName}
          required
        />
        
        <TextField
          label="Email Address"
          type="email"
          value={data.email}
          onChange={(value) => updateData('email', value)}
          placeholder="Enter your email address"
          error={errors.email}
          required
        />
        
        <TextField
          label="Phone Number"
          type="tel"
          value={data.phone}
          onChange={(value) => updateData('phone', value)}
          placeholder="Enter your phone number"
          error={errors.phone}
          required
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleNext} className="px-8">
          Next →
        </Button>
      </div>
    </div>
  );
}