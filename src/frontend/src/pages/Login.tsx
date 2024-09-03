import React, { useState, FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { doSignWithEmailAndPassword, doSignInWithGoogle, doCreateUserWithEmailAndPassword, doSignInWithFacebook } from "../services/auth";
import { useAuth } from "../contexts/authContext";
import { FirebaseError } from "firebase/app";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import '../styles/login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [googleError, setGoogleError] = useState<string>("");
    const [facebookError, setFacebookError] = useState<string>("");
    const { userLoggedIn } = useAuth();

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        setEmailError("");
        setPasswordError("");
        try {
            await doCreateUserWithEmailAndPassword(email, password);
        } catch (error) {
            handleErrors(error as FirebaseError);
        }
    };

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        if (!isSigningUp) {
            setEmailError("");
            setPasswordError("");
            try {
                await doSignWithEmailAndPassword(email, password);
            } catch (error) {
                handleErrors(error as FirebaseError);
            }
        }
    };

    const onGoogleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        setGoogleError("");
        try {
            await doSignInWithGoogle();
        } catch (error) {
            handleErrors(error as FirebaseError);
        }
    };

    const onFacebookSignIn = async (e: FormEvent) => {
        e.preventDefault();
        setFacebookError("");
        try {
            await doSignInWithFacebook();
        } catch (error) {
            handleErrors(error as FirebaseError);
        }
    };

    const handleErrors = (error: FirebaseError) => {
        const errorCode = error.code;

        switch (errorCode) {
            case "auth/invalid-email":
                setEmailError("Invalid email format.");
                break;
            case "auth/email-already-in-use":
                setEmailError("Email already exists.");
                break;
            case "auth/user-disabled":
                setEmailError("User account is disabled.");
                break;
            case "auth/user-not-found":
                setEmailError("This email isn't registered.");
                break;
            case "auth/weak-password":
                setPasswordError("Password should be at least 6 characters.");
                break;
            case "auth/wrong-password":
                setPasswordError("Incorrect password.");
                break;
            case "auth/popup-closed-by-user":
                setGoogleError("Popup was closed before authentication completed.");
                setFacebookError("Popup was closed before authentication completed.");
                break;
            case "auth/account-exists-with-different-credential":
                setGoogleError("An account already exists with the same e-mail.");
                setFacebookError("An account already exists with the same e-mail.");
                break;
            default:
                setEmailError("An unknown error occurred. Please try again.");
                setPasswordError("An unknown error occurred. Please try again.");
                setGoogleError("An unknown error occurred. Please try again.");
                setFacebookError("An unknown error occurred. Please try again.");
                break;
        }
    };

    const toggleSignMode = () => {
        setIsSigningUp(!isSigningUp);
        setEmail("");
        setPassword("");
        setEmailError("");
        setPasswordError("");
        setGoogleError("");
        setFacebookError("");
    };

    return (
        <section id="login-section">
            <div className="signInContainer">
                {userLoggedIn && <Navigate to="/home" replace={true} />}
                <div className="login-header"><h1>Trisog</h1></div>
                
                <form id="login-form" onSubmit={isSigningUp ? handleRegister : handleSignIn}>
                    <h2>{isSigningUp ? "SIGN UP" : "SIGN IN"}</h2>
                    <p>
                        {isSigningUp
                            ? "Create your account"
                            : "Enter your credentials to access your account"}
                    </p>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={`inputBase ${emailError ? "inputError" : ""}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <span className="errors">{emailError}</span>}
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className={`inputBase ${passwordError ? "inputError" : ""}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <span className="errors">{passwordError}</span>}
                    <button type="submit" className="signInButton">
                        {isSigningUp ? "SIGN UP" : "SIGN IN"}
                    </button>
                    <div className="switch">
                        <a
                            className="signUpA"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleSignMode();
                            }}
                        >
                            {isSigningUp ? "SIGN IN" : "SIGN UP"}
                        </a>
                    </div>
                    <p>OR</p>
                    <button
                        disabled={isSigningUp}
                        onClick={onGoogleSignIn}
                        className="googleButton"
                    >
                        <FaGoogle className="google-icon"/> <span>SIGN IN WITH GOOGLE</span>
                    </button>
                    {googleError && <span className="errors">{googleError}</span>}
                    <button
                        disabled={isSigningUp}
                        onClick={onFacebookSignIn}
                        className="facebookButton"
                    >
                        <FaFacebook className="facebook-icon"/> <span>SIGN IN WITH FACEBOOK</span>
                    </button>
                    {facebookError && <span className="errors">{facebookError}</span>}
                </form>
            </div>
        </section>
    );
};

export default Login;
