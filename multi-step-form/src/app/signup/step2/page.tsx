'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { StepIndicator } from '@/components/StepIndicator';
import { useSignupForm } from '../../hooks/useSignupForm';
import { ValidationErrors } from '../../types/signup';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Step2() {
  const router = useRouter();
  const { data, updateData, validateStep2 } = useSignupForm();
  const [errors, setErrors] = useState<ValidationErrors>({});

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const handleNext = () => {
    const validationErrors = validateStep2();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      router.push('/signup/step3');
    }
  };

  const handleBack = () => {
    router.push('/signup/step1');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <StepIndicator currentStep={2} totalSteps={3} />
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Additional Information</h1>
        <p className="text-gray-600">Add your address and profile details</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="space-y-2">
          <Label htmlFor="streetAddress" className="text-sm font-medium">
            Street Address <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="streetAddress"
            type="text"
            value={data.streetAddress}
            onChange={(e) => updateData('streetAddress', e.target.value)}
            placeholder="Enter your street address"
            className={errors.streetAddress ? 'border-red-500' : ''}
          />
          {errors.streetAddress && (
            <p className="text-sm text-red-500">{errors.streetAddress}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium">
              City <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="city"
              type="text"
              value={data.city}
              onChange={(e) => updateData('city', e.target.value)}
              placeholder="Enter your city"
              className={errors.city ? 'border-red-500' : ''}
            />
            {errors.city && (
              <p className="text-sm text-red-500">{errors.city}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              State/Province <span className="text-red-500 ml-1">*</span>
            </Label>
            <Select value={data.state} onValueChange={(value) => updateData('state', value)}>
              <SelectTrigger className={errors.state ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select your state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.state && (
              <p className="text-sm text-red-500">{errors.state}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="postalCode" className="text-sm font-medium">
            Postal Code <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="postalCode"
            type="text"
            value={data.postalCode}
            onChange={(e) => updateData('postalCode', e.target.value)}
            placeholder="Enter your postal code"
            className={errors.postalCode ? 'border-red-500' : ''}
          />
          {errors.postalCode && (
            <p className="text-sm text-red-500">{errors.postalCode}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bio" className="text-sm font-medium">
            Bio/Profile Information
          </Label>
          <Textarea
            id="bio"
            value={data.bio}
            onChange={(e) => updateData('bio', e.target.value)}
            placeholder="Tell us a bit about yourself..."
            rows={4}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack}>
          ← Back
        </Button>
        <Button onClick={handleNext} className="px-8">
          Next →
        </Button>
      </div>
    </div>
  );
}