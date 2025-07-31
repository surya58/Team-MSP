import { SignupData } from '../app/types/signup';

interface ConfirmationCardProps {
  data: SignupData;
}

export function ConfirmationCard({ data }: ConfirmationCardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Full Name:</span>
            <div className="font-medium">{data.fullName}</div>
          </div>
          <div>
            <span className="text-gray-600">Email:</span>
            <div className="font-medium">{data.email}</div>
          </div>
          <div>
            <span className="text-gray-600">Phone:</span>
            <div className="font-medium">{data.phone}</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Street Address:</span>
            <div className="font-medium">{data.streetAddress}</div>
          </div>
          <div>
            <span className="text-gray-600">City:</span>
            <div className="font-medium">{data.city}</div>
          </div>
          <div>
            <span className="text-gray-600">State:</span>
            <div className="font-medium">{data.state}</div>
          </div>
          <div>
            <span className="text-gray-600">Postal Code:</span>
            <div className="font-medium">{data.postalCode}</div>
          </div>
        </div>
      </div>

      {data.bio && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Profile Information</h3>
          <div className="text-sm">
            <span className="text-gray-600">Bio:</span>
            <div className="font-medium">{data.bio}</div>
          </div>
        </div>
      )}
    </div>
  );
}