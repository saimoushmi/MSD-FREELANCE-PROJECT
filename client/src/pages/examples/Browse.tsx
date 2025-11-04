import Browse from '../Browse';
import { AuthProvider } from '@/contexts/AuthContext';

export default function BrowseExample() {
  return (
    <AuthProvider>
      <Browse />
    </AuthProvider>
  );
}
