import ProfileEdit from '../ProfileEdit';
import { AuthProvider } from '@/contexts/AuthContext';

export default function ProfileEditExample() {
  return (
    <AuthProvider>
      <ProfileEdit />
    </AuthProvider>
  );
}
