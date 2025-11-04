import Dashboard from '../Dashboard';
import { AuthProvider } from '@/contexts/AuthContext';

export default function DashboardExample() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}
