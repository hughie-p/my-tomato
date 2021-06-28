import { firebaseConfig } from 'configs/firebase';
import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';

type ContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  setUser: any;
  loadingAuthState: boolean;
};

const getFirebaseAuth = async () => {
  await import('firebase/auth').catch(() => window.location.reload());
  if (firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return firebase.auth;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    getFirebaseAuth().then((auth) =>
      auth().onAuthStateChanged((_user) => {
        setUser(_user);
        setLoadingAuthState(false);
      }),
    );
  }, []);

  return (
    <AuthContext.Provider value={{ user, authenticated: user != null, setUser, loadingAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
