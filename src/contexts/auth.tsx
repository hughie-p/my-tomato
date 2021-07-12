import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { firebaseConfig } from 'configs/firebase';

type ContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  setUser: any;
  loadingAuthState: boolean;
};

type FirebaseAuth = {
  auth: firebase.auth.Auth;
  googleProvider: firebase.auth.GoogleAuthProvider;
  facebookProvider: firebase.auth.FacebookAuthProvider;
};

export const getFirebaseAuth = async (): Promise<FirebaseAuth> => {
  await import('firebase/auth').catch(() => window.location.reload());
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  } catch (err) {
    console.error(err);
  }
  return {
    auth: firebase.auth(),
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider(),
  };
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    getFirebaseAuth()
      .then(({ auth }) =>
        auth.onAuthStateChanged((_user) => {
          setUser(_user);
          setLoadingAuthState(false);
        }),
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <AuthContext.Provider value={{ user, authenticated: user !== null, setUser, loadingAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
