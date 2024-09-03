import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, UserCredential, FacebookAuthProvider } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async(email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const doSignWithEmailAndPassword = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const doSignInWithGoogle = async (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result
}

export const doSignOut = (): Promise<void> => {
    return auth.signOut()
}

export const doSignInWithFacebook = async (): Promise<UserCredential> => {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider);
};