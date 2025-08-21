"use client";

import { createContext, useContext, ReactNode } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface AuthContextType {
    session: { user?: { id: string; email: string; name: string } } | null;
    isLoading: boolean;
    logout: () => void;
    login: (email: string, password: string) => void;
    register: (email: string, password: string, name: string) => void;
    loginWithGoogle: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);




export function AuthProvider({ children }: { children: ReactNode }) {
    const { data: session, isPending: isLoading } = authClient.useSession();
    const router = useRouter();

    const verifyEmail = async (email:string)=>{
        authClient.sendVerificationEmail({
            email,
            callbackURL: "http://localhost:3000/auth/verify-email",
        })
    }

    const loginWithGoogle = async () => {
        try {
            const user = await authClient.signIn.social({
                provider: "google",
                callbackURL:"http://localhost:3000/dashboard",
            });

        } catch (error) {
            console.error("Google sign-in failed:", error);
        }
    }

    const logout = async () => {
        await authClient.signOut({
            fetchOptions: {
                credentials: "include",
                onSuccess: () => router.push('/auth/sign-in'),
                onError: (ctx) => console.error('signOut failed:', ctx.error),
            },
        });
    };
    const login = async (email: string, password: string) => {
        await authClient.signIn.email({ email, password });
        router.push("/dashboard");
    };
    const register = async (email: string, password: string, name: string) => {
        try {
            await authClient.signUp.email({ email, password, name });
            await verifyEmail(email);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ session, isLoading, logout, login, register, loginWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}