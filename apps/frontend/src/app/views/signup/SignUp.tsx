import { useState, useContext, FormEvent } from "react"
import { auth } from "../../firebase/firebase"
import { useNavigate } from 'react-router-dom';

import SignUpLogo from "../../components/logo/SignUpLogo";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./signup.css"

export const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const signUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/dashboard')
        } catch (error: any) {
            setError(error.message);
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if (confirmPassword !== e.target.value) {
            setError("Passwords do not match")
            return
        } else setError("")
    }
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
        if (password !== e.target.value) {
            setError("Passwords do not match")
            return
        } else setError("")
    }

    return (
        <div className="signupLayout">
            <div></div>
            <SignUpLogo />
            <div></div>
            <form className="signupForm" onSubmit={(e) => signUp(e)}>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input id="email" className="inputField" type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input id="password" className="inputField" required type="password" onChange={handlePasswordChange} />
                </div>
                <div className="formGroup">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input id="confirmPassword" className="inputField" required type="password" onChange={handleConfirmPasswordChange} />
                </div>
                <div className="formGoup" style={{ position: 'relative', height: '15px' }}>
                    {error ? <div className="error">{error}</div> : <div className="error"></div>}
                </div>
                <div className="submitButton">
                <button type="submit">Sign Up</button>
                </div>
            </form>
        </div >
    )
}