'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { TextField } from '@/components/TextField';
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
import { Label } from '@/components/ui/label';

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
        <TextField
          label="Street Address"
          value={data.streetAddress}
          onChange={(value) => updateData('streetAddress', value)}
          placeholder="Enter your street address"
          error={errors.streetAddress}
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="City"
            value={data.city}
            onChange={(value) => updateData('city', value)}
            placeholder="Enter your city"
            error={errors.city}
            required
          />
          
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
        
        <TextField
          label="Postal Code"
          value={data.postalCode}
          onChange={(value) => updateData('postalCode', value)}
          placeholder="Enter your postal code"
          error={errors.postalCode}
          required
        />
        
        <TextField
          label="Bio/Profile Information"
          type="textarea"
          value={data.bio}
          onChange={(value) => updateData('bio', value)}
          placeholder="Tell us a bit about yourself..."
        />
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