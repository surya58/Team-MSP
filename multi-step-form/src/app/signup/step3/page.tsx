'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { StepIndicator } from '@/components/StepIndicator';
import { ConfirmationCard } from '@/components/ConfirmationCard';
import { useSignupForm } from '../../hooks/useSignupForm';

export default function Step3() {
  const router = useRouter();
  const { data, resetData } = useSignupForm();

  const handleSubmit = () => {
    // Simulate form submission
    console.log('Form submitted with data:', data);
    alert('Form submitted successfully! Check the console for the data.');
    
    // Reset form and redirect to home
    resetData();
    router.push('/');
  };

  const handleBack = () => {
    router.push('/signup/step2');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <StepIndicator currentStep={3} totalSteps={3} />
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Review & Confirm</h1>
        <p className="text-gray-600">Review your information before submitting</p>
      </div>

      <div className="mb-8">
        <ConfirmationCard data={data} />
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack}>
          ← Back
        </Button>
        <Button onClick={handleSubmit} className="px-8 bg-green-600 hover:bg-green-700">
          Submit ✓
        </Button>
      </div>
    </div>
  );
}