import { SignupData } from '../app/types/signup';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ConfirmationCardProps {
  data: SignupData;
}

export function ConfirmationCard({ data }: ConfirmationCardProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Full Name:</span>
              <div className="font-medium">{data.fullName}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Email:</span>
              <div className="font-medium">{data.email}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Phone:</span>
              <div className="font-medium">{data.phone}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Address Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Street Address:</span>
              <div className="font-medium">{data.streetAddress}</div>
            </div>
            <div>
              <span className="text-muted-foreground">City:</span>
              <div className="font-medium">{data.city}</div>
            </div>
            <div>
              <span className="text-muted-foreground">State:</span>
              <div className="font-medium">{data.state}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Postal Code:</span>
              <div className="font-medium">{data.postalCode}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {data.bio && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <span className="text-muted-foreground">Bio:</span>
              <div className="font-medium mt-1">{data.bio}</div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}