"use client";
import { useAuth } from '@/context/auth-provider'
import { SidebarTrigger } from '@/components/ui/sidebar'
export const Navbar: React.FC = () => {
  const { session, logout } = useAuth();



  const handleLogout = () => {
    logout();

  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center">
            <SidebarTrigger className="mr-4" />
          </div>
          <div>
          </div>
        </div>
      </div>
    </nav>
  );
};
