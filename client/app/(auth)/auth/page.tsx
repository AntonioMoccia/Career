"use client";
import React, { useState } from 'react';
import { LoginForm } from '@/components/forms/LoginForm';
import { RegisterForm } from '@/components/forms/RegisterForm';

type AuthMode = 'login' | 'register';

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('login');

  const handleSuccess = () => {
    // Reindirizza alla dashboard o alla pagina principale
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {mode === 'login' ? (
            <LoginForm
              onSuccess={handleSuccess}
              onSwitchToRegister={() => setMode('register')}
            />
          ) : (
            <RegisterForm
              onSuccess={() => setMode('login')}
              onSwitchToLogin={() => setMode('login')}
            />
          )}
        </div>
      </div>
    </div>
  );
}
