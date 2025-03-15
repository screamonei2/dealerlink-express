
import React from "react";
import AuthForm from "@/components/auth/AuthForm";

export default function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">DealerLink Express</h1>
          <p className="mt-2 text-gray-600">
            Sign in or create your account to get started
          </p>
        </div>
        
        <AuthForm />
      </div>
    </div>
  );
}
