import React, { useState, useContext, useEffect } from "react"
import "./signup.css"
import  loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import  loginVector from "../../images/logos/loginVector.svg"
import  loginCrystalBall from "../../images/logos/loginCrystalBall.svg"
import  loginGroup103 from "../../images/logos/loginGroup103.svg"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import { signUpUser, getUsersFromSearch } from "../../api-client/apiModules/users"


export const SignUp = () => {

    const [isDisabled, setIsDisabled] = React.useState(true)
    const [authError, setAuthError] = React.useState("")
    const [emailError, setEmailError] = React.useState(true)
    const navigate = useNavigate()
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [inputError, setInputError] = React.useState(false)

    // const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    // if(!emailRegex.test(email)) {
    //     setEmailError(true)
    // } else {
    //     setEmailError(false)
    // }

    // testing for commit change

    useEffect(() => {
        const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        if (!emailRegex.test(email)) {
            setEmailError(true)
            setIsDisabled(true)
        } else {
            setEmailError(false)
            setIsDisabled(false)
        }
    })
    // const createUser = async () => {
    //     if(firstName.length < 1 || lastName.length < 1 || username.length < 1 || emailError === true || password.length < 7) {
    //         setInputError(true)
    //     } 
    //     else {
    //         try {
    //             await createUserWithEmailAndPassword(auth, email, password)
    //             navigate("/namepage")
    //         }
    //         catch(err: any) {
    //             console.error(err.message)
    //             setInputError(true)
    //             // setAuthError(err.message)
    //         }
    //     } 
    // }
    const signUp = async () => {
        try {
            await signUpUser({email, password, firstName, lastName, username})
            // navigate("/dashboard")
        }
        catch(err: any) {
            console.log(err.message)
            setInputError(true)
        }
    } 

    return (
        <AuthLayout>
            <div className="signupLayout">
                <div className='signupGroup103Container'>
                    <img src={loginGroup103} alt="" className="signupGroup103" style={{gridRowStart: "1", gridRowEnd: "2"}}/>
                </div>
                <div className='signupLogoContainer'>
                    <div className="signupLogo" style={{gridRowStart: "2", gridRowEnd: "3"}}>
                    <h1 className="signupW">W</h1>
                    <img src={loginListThreeFilled} alt="" className="signupListThreeFilled"/>
                    <h1 className="signupL">L</h1>
                    <img src={loginVector} alt="" className="signupVector"/>
                    <img src={loginCrystalBall} alt="" className="signupCrystalBall"/>
                    </div>
                </div>
                <div className="signupIndicatesRequiredContainer">
                    <p className="signupIndicatesRequired">* Indicates Required</p>
                </div>
                <div className="signupFirstNameContainer">
                    <h2 className="signupFirstName"><span className="signupAsterisk">*</span>First Name</h2>
                    <div className="signupFirstNameInputContainer">
                        <input className="signupFirstNameInput" type="text" onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                </div>
                <div className="signupLastNameContainer">
                    <h2 className="signupLastName"><span className="signupAsterisk">*</span>Last Name</h2>
                    <div className="signupLastNameInputContainer">
                        <input className="signupLastNameInput" type="text" onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="signupUsernameContainer">
                    <h2 className="signupUsername"><span className="signupAsterisk">*</span>Username</h2>
                    <div className="signupUsernameInputContainer">
                        <input className="signupUsernameInput" type="text" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>
                <div className="signupEmailContainer">
                    <h2 className="signupEmail"><span className="signupAsterisk">*</span>Email</h2>
                    <div className="signupEmailInputContainer">
                        <input className="signupEmailInput" type="text" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="signupEmailErrorContainer">
                    <p className="signupEmailError">Please enter a valid email address</p>
                </div>
                <div className="signupPasswordContainer">
                    <h2 className="signupPassword"><span className="signupAsterisk">*</span>Password</h2>
                    <div className="signupPasswordInputContainer">
                        <input className="signupPasswordInput" required type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="signupPasswordErrorContainer">
                    <p className="signupPasswordError">Password must be at least 8 characters</p>
                </div>
                <div className="signupButtonContainer">
                    <button className="signupButton" onClick={signUp}  disabled={isDisabled} style={{backgroundColor: isDisabled ? "#6F6F6F" : "#000"}}>
                        <span className="signupButtonText">Submit</span>
                    </button>
                </div>
            </div>
        </AuthLayout>
    )
}