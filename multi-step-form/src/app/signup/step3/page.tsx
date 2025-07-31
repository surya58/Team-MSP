'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Check } from 'lucide-react';

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

export default function Step3() {
  const router = useRouter();

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    router.push('/');
  };

  const handleBack = () => {
    router.push('/signup/step2');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <StepIndicator currentStep={3} />
        
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Review & Confirm</CardTitle>
            <CardDescription>Final step of the signup process</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-8">
              <div className="text-gray-500 mb-4">
                <Check className="w-16 h-16 mx-auto text-green-500 mb-4" />
                
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <Button onClick={handleSubmit} className="px-8 bg-green-600 hover:bg-green-700">
                Submit <Check className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}