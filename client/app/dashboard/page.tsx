"use client";
import React from 'react';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { Navbar } from '@/components/common/Navbar';
import { useAuth } from '@/context/auth-context';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Benvenuto, {user?.name}!
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Candidature attive
                  </h3>
                  <p className="text-3xl font-bold text-blue-600">12</p>
                  <p className="text-sm text-gray-500">In corso</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Colloqui programmati
                  </h3>
                  <p className="text-3xl font-bold text-green-600">3</p>
                  <p className="text-sm text-gray-500">Prossimi 7 giorni</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Aziende contattate
                  </h3>
                  <p className="text-3xl font-bold text-purple-600">8</p>
                  <p className="text-sm text-gray-500">Questo mese</p>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Informazioni account
                </h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="text-sm text-gray-900">{user?.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Nome</dt>
                    <dd className="text-sm text-gray-900">{user?.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email verificata</dt>
                    <dd className="text-sm text-gray-900">
                      {user?.emailVerified ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Verificata
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Non verificata
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
