'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Check } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

interface ValidationErrors {
  [key: string]: string;
}

const StepIndicator = ({ currentStep }: { currentStep: number }) => (
  <div className="flex items-center justify-center mb-8">
    {[1, 2, 3].map((step, index) => {
      const isCompleted = step < currentStep;
      const isCurrent = step === currentStep;
      
      return (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
              isCompleted
                ? "bg-green-500 text-white"
                : isCurrent
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {isCompleted ? (
              <Check className="w-5 h-5" />
            ) : (
              step
            )}
          </div>
          {index < 2 && (
            <div
              className={`w-16 h-1 mx-2 ${
                isCompleted ? "bg-green-500" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      );
    })}
  </div>
);

export default function Step1() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateStep1 = (): ValidationErrors => {
    const stepErrors: ValidationErrors = {};
    
    if (!formData.fullName.trim()) {
      stepErrors.fullName = 'Please enter your full name';
    }
    
    if (!formData.email.trim()) {
      stepErrors.email = 'Please enter a valid email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      stepErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      stepErrors.phone = 'Please enter your phone number';
    }
    
    return stepErrors;
  };

  const handleNext = () => {
    const validationErrors = validateStep1();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      router.push('/signup/step2');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <StepIndicator currentStep={1} />
        
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Please provide your basic information to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => updateFormData('fullName', e.target.value)}
                placeholder="Enter your full name"
                className={errors.fullName ? 'border-red-500' : ''}
              />
              {errors.fullName && (
                <p className="text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="Enter your email address"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="Enter your phone number"
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={handleNext} className="px-8">
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}