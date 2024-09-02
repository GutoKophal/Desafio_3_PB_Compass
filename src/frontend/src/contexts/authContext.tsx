import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth } from '../services/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

interface AuthContextType {
    currentUser: User | null;
    userLoggedIn: boolean;
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setUserLoggedIn(!!user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const logout = () => {
        signOut(auth)
            .then(() => {
                setCurrentUser(null);
                setUserLoggedIn(false);
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    };

    const value: AuthContextType = {
        currentUser,
        userLoggedIn,
        setUserLoggedIn,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
