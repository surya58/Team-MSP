'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium">
            Full Name <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            value={data.fullName}
            onChange={(e) => updateData('fullName', e.target.value)}
            placeholder="Enter your full name"
            className={errors.fullName ? 'border-red-500' : ''}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => updateData('email', e.target.value)}
            placeholder="Enter your email address"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone Number <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => updateData('phone', e.target.value)}
            placeholder="Enter your phone number"
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleNext} className="px-8">
          Next →
        </Button>
      </div>
    </div>
  );
}