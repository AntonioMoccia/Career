"use client"
import React from 'react'
import { SignInForm } from '@/components/forms/SignInForm'

function SignInPage() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <SignInForm
            onSuccess={() => window.location.href = '/dashboard'}
            onSwitchToRegister={() => {}}
        />
    </div>
  )
}

export default SignInPage