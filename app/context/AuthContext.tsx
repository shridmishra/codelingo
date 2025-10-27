'use client';

import React, { useState, useMemo, useEffect, createContext, useContext, useCallback } from 'react';

const AUTH_STORAGE_KEY = 'jslingsAuthToken';

interface User {
    id: string;
    username: string;
    email?: string;
}

interface AuthContextType {
    token: string | null;
    user: User | null;
    isAuthenticated: boolean;
    login: (token: string, user: User) => void;
    logout: () => void;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem(AUTH_STORAGE_KEY);
        if (storedToken) {
            verifyToken(storedToken);
        } else {
            setIsLoading(false);
        }
    }, []);

    const verifyToken = useCallback(async (tokenToVerify: string) => {
        try {
            const response = await fetch('/api/auth/me', {
                headers: {
                    'Authorization': `Bearer ${tokenToVerify}`
                }
            });
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                setToken(tokenToVerify);
            } else {
                throw new Error('Token verification failed');
            }
        } catch (error) {
            console.error(error);
            setUser(null);
            setToken(null);
            localStorage.removeItem(AUTH_STORAGE_KEY);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const login = (newToken: string, newUser: User) => {
        setToken(newToken);
        setUser(newUser);
        localStorage.setItem(AUTH_STORAGE_KEY, newToken);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem(AUTH_STORAGE_KEY);
    };

    const value = {
        token,
        user,
        isAuthenticated: !!user,
        login,
        logout,
        isLoading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
