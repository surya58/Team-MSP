'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface FormData {
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  bio: string;
}

interface ValidationErrors {
  [key: string]: string;
}

// Step Indicator Component
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

export default function Step2() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    bio: ''
  });
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

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateStep2 = (): ValidationErrors => {
    const stepErrors: ValidationErrors = {};
    
    if (!formData.streetAddress.trim()) {
      stepErrors.streetAddress = 'Please enter your street address';
    }
    
    if (!formData.city.trim()) {
      stepErrors.city = 'Please enter your city';
    }
    
    if (!formData.state.trim()) {
      stepErrors.state = 'Please select your state';
    }
    
    if (!formData.postalCode.trim()) {
      stepErrors.postalCode = 'Please enter your postal code';
    }
    
    return stepErrors;
  };

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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <StepIndicator currentStep={2} />
        
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Address Information</CardTitle>
            <CardDescription>Add your address and profile details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="streetAddress">
                Street Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="streetAddress"
                value={formData.streetAddress}
                onChange={(e) => updateFormData('streetAddress', e.target.value)}
                placeholder="Enter your street address"
                className={errors.streetAddress ? 'border-red-500' : ''}
              />
              {errors.streetAddress && (
                <p className="text-sm text-red-500">{errors.streetAddress}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  placeholder="Enter your city"
                  className={errors.city ? 'border-red-500' : ''}
                />
                {errors.city && (
                  <p className="text-sm text-red-500">{errors.city}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>
                  State/Province <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.state} onValueChange={(value) => updateFormData('state', value)}>
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
              <Label htmlFor="postalCode">
                Postal Code <span className="text-red-500">*</span>
              </Label>
              <Input
                id="postalCode"
                value={formData.postalCode}
                onChange={(e) => updateFormData('postalCode', e.target.value)}
                placeholder="Enter your postal code"
                className={errors.postalCode ? 'border-red-500' : ''}
              />
              {errors.postalCode && (
                <p className="text-sm text-red-500">{errors.postalCode}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio/Profile Information</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => updateFormData('bio', e.target.value)}
                placeholder="Tell us a bit about yourself..."
                rows={4}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft className="w-4 h-4 mr-1" /> Back
              </Button>
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