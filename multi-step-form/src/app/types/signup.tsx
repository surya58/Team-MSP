export interface SignupData {
  fullName: string;
  email: string;
  phone: string;
  
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  
  bio: string;
}

export interface SignupContextType {
  data: SignupData;
  updateData: (field: keyof SignupData, value: string) => void;
  resetData: () => void;
}

export interface ValidationErrors {
  [key: string]: string;
}