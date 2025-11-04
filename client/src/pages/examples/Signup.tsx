import Signup from '../Signup';
import { AuthProvider } from '@/contexts/AuthContext';

export default function SignupExample() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}
