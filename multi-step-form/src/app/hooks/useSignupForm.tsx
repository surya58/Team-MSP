import { useSignupContext } from '../context/SignupContext';
import { ValidationErrors } from '../types/signup';

export function useSignupForm() {
  const { data, updateData, resetData } = useSignupContext();

  const validateStep1 = (): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    if (!data.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    
    if (!data.email.trim()) {
      errors.email = 'Please enter a valid email address';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!data.phone.trim()) {
      errors.phone = 'Please enter your phone number';
    }
    
    return errors;
  };

  const validateStep2 = (): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    if (!data.streetAddress.trim()) {
      errors.streetAddress = 'Please enter your street address';
    }
    
    if (!data.city.trim()) {
      errors.city = 'Please enter your city';
    }
    
    if (!data.state.trim()) {
      errors.state = 'Please select your state';
    }
    
    if (!data.postalCode.trim()) {
      errors.postalCode = 'Please enter your postal code';
    }
    
    return errors;
  };

  return {
    data,
    updateData,
    resetData,
    validateStep1,
    validateStep2,
  };
}