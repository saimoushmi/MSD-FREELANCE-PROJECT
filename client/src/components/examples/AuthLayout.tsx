import AuthLayout from '../AuthLayout';
import { Card } from '@/components/ui/card';

export default function AuthLayoutExample() {
  return (
    <AuthLayout>
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Sample Auth Form</h2>
        <p className="text-muted-foreground">This is where your login or register form would appear.</p>
      </Card>
    </AuthLayout>
  );
}
