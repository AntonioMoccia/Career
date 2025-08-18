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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const { data: session, isPending: isLoading } = authClient.useSession();
    const router = useRouter();

    const logout = async () => {
        await authClient.signOut();
        router.push("/auth/sign-in");
    };
    const login = async (email: string, password: string) => {
        await authClient.signIn.email({ email, password });
        router.push("/dashboard");
    };
    const register = async (email: string, password: string, name: string) => {
        await authClient.signUp.email({ email, password, name });
    };

    return (
        <AuthContext.Provider value={{ session, isLoading, logout, login, register }}>
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