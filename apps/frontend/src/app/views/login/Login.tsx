/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useEffect } from 'react';
import { UserContext } from '../../app';
import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import { createUserData } from '../../api-client/apiModules/users';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import  googleGImage from "../../images/logos/googleGImage.svg"
import  loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import  loginVector from "../../images/logos/loginVector.svg"
import  loginCrystalBall from "../../images/logos/loginCrystalBall.svg"
import  loginGroup103 from "../../images/logos/loginGroup103.svg"
import "./login.css"
import { auth } from "../../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const Login = () => {
    const [ signIn, setSignIn ] = React.useState<any>([]);
    const {user, setUser} = React.useContext(UserContext);
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isDisabled, setIsDisabled] = React.useState(true)
    const [authError, setAuthError] = React.useState("")
    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => (
          setSignIn(codeResponse),
          navigate("/dashboard")
          // window.location.replace(localhost:4200/dashboard) 
          //`${window.location.origin}/whatever`
        ),
        onError: (error) => console.log('Login Failed:', error)
    });

    // useEffect(
    //     () => {
    //         const signInUser = async () => {
    //             if (signIn) {
    //                 axios
    //                     .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${signIn.access_token}`, {
    //                         headers: {
    //                             Authorization: `Bearer ${signIn.access_token}`,
    //                             Accept: 'application/json'
    //                         }
    //                     })
    //                     .then(async (res) => {
    //                         const userData = await createUserData({name: res.data.name, email: res.data.email, picture: res.data.picture});
    //                         setUser(userData);
    //                         console.log("useEffect signed in user", userData)
    //                         localStorage.setItem('user', JSON.stringify(userData));
    //                     })
    //                     .catch((err) => console.log(err));
    //             }
    //         }
    //         signInUser();
    //     },
    //     [ signIn ]
    // );
    useEffect(() => {
      const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
      if (!emailRegex.test(email)) {
        setIsDisabled(true)
      } else {
        setIsDisabled(false)
      }
    })
    const onEmailChange = (e: React.ChangeEvent<any>) => {
      setEmail(e.target.value)
      setAuthError("")
    }
    const onPasswordChange = (e: React.ChangeEvent<any>) => {
      setPassword(e.target.value)
      setAuthError("")
    } 
    const signInEP = async () => {
      try {
          await signInWithEmailAndPassword(auth, email, password)
          navigate("/dashboard")
      }
      catch(err: any) {
          console.error(err.message)
          setAuthError(err.message)
      }
    }

    return (
      <AuthLayout className="h-screen">
        <div className="loginLayout">
          <div className='loginGroup103Container'>
            <img src={loginGroup103} alt="" className="loginGroup103" style={{gridRowStart: "1", gridRowEnd: "2"}}/>
          </div>
          <div className='loginLogoContainer'>
            <div className="loginLogo" style={{gridRowStart: "2", gridRowEnd: "3"}}>
              <h1 className="loginW">W</h1>
              <img src={loginListThreeFilled} alt="" className="loginListThreeFilled"/>
              <h1 className="loginL">L</h1>
              <img src={loginVector} alt="" className="loginVector"/>
              <img src={loginCrystalBall} alt="" className="loginCrystalBall"/>
            </div>
          </div>
          <div className="errorContainer" style={{gridRowStart: "3", gridRowEnd: "4"}}>
            {authError.length > 1 ? 
              (<div className='errorBox'>
                <span className='errorText'>Invalid Username or Password</span>
              </div>)
            : 
              null
            }
          </div>
          <div className="loginEmailContainer" style={{gridRowStart: "4", gridRowEnd: "5"}}>
            <h2 className="loginEmail">
              Email
            </h2>
            {authError.length > 1 ?
              <div className="loginEmailInputContainer" style={{border: "2px solid #F00", display: "flex", height: "40px", padding: "4px", paddingTop: "6px", alignItems: "center", borderRadius: "8px", background: "#F6F6F6", width: "345px"}}>
                <input required className="loginEmailInput" type="text" value={email} onChange={onEmailChange} />
              </div>
            : 
              <div className="loginEmailInputContainer">
                <input required className="loginEmailInput" type="text" value={email} onChange={onEmailChange} />
              </div>
            }
          </div>
          <div className="loginPasswordContainer" style={{gridRowStart: "5", gridRowEnd: "6"}}>
            <h2 className="loginPassword">
              Password
            </h2>
            {authError.length > 1 ? 
              <div className="loginPasswordInputContainer" style={{border: "2px solid #F00", display: "flex", height: "40px", padding: "4px", paddingTop: "6px", alignItems: "center", borderRadius: "8px", background: "#F6F6F6", width: "345px"}}>
                <input required className="loginPasswordInput" type="password" value={password} onChange={onPasswordChange}/>
              </div>
            :
              <div className="loginPasswordInputContainer">
                <input required className="loginPasswordInput" type="password" value={password} onChange={onPasswordChange}/>
              </div>
            }
          </div>
          <div className='loginButtonContainer' style={{gridRowStart: "6", gridRowEnd: "7"}}>
            <button className="loginButton" type="submit" onClick={signInEP} disabled={isDisabled} style={{backgroundColor: isDisabled ? "#6F6F6F" : "#000"}}>
              <span className="loginButtonText">
                Login
              </span>
            </button>
          </div>
          <div className='googleLoginButtonContainer'>
            <button
              type="submit"
              onClick={() => login()}
              className="googleLoginButton"
              style={{gridRowStart: "7", gridRowEnd: "8"}}
            >
              <div className="googleLoginButtonImageContainer">
                <img src={googleGImage} alt="" className="googleLoginButtonImage"/>
              </div>
              <span className="googleLoginButtonText">
                Sign in with Google <span aria-hidden="true"></span>
              </span>
            </button>
          </div>
          <div className="signupForgot" style={{gridRowStart: "8", gridRowEnd: "9"}}>
            <button className="loginSignupButton">
              <span className="loginSignupButtonText">
                <Link to="/signup">Sign Up</Link>
              </span>
            </button>
            <button className="forgotButton">
              <span className="forgotButtonText">
                <Link to="/forgotPassword">Forgot Password</Link>
              </span>
            </button>
          </div>
        </div>
      </AuthLayout>
    );
}
        //   <NavLink
        //   onClick={onSignoutClick}
        //   exact
        //   to="/login"
        //   activeClassName="bg-gray-100"
        //   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        //   role="menuitem"
        // >
        //   Sign out
        // </NavLink>