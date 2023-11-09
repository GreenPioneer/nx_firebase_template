/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { UserContext } from '../../app';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { createUserData } from '../../api-client/apiModules/users';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import { NavLink } from 'react-router-dom';
import  googleGImage from "../../images/logos/googleGImage.svg"
import  loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import  loginVector from "../../images/logos/loginVector.svg"
import  loginCrystalBall from "../../images/logos/loginCrystalBall.svg"
import  loginGroup103 from "../../images/logos/loginGroup103.svg"
import "./login.css"

export const Login = () => {
    const [ signIn, setSignIn ] = React.useState<any>([]);
    const {user, setUser} = React.useContext(UserContext);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setSignIn(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            const signInUser = async () => {
                if (signIn) {
                    axios
                        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${signIn.access_token}`, {
                            headers: {
                                Authorization: `Bearer ${signIn.access_token}`,
                                Accept: 'application/json'
                            }
                        })
                        .then(async (res) => {
                            const userData = await createUserData({name: res.data.name, email: res.data.email, picture: res.data.picture});
                            setUser(userData);
                            localStorage.setItem('user', JSON.stringify(userData));
                        })
                        .catch((err) => console.log(err));
                }
            }
            signInUser();
        },
        [ signIn ]
    );
    return (
      <AuthLayout className="h-screen">
        <div className="loginLayout">
          <div  style={{gridRowStart: "1", gridRowEnd: "2"}}>
            <img src={loginGroup103} alt="" className="loginGroup103"/>
            <div className="loginLogo">
              <h1 className="loginW">W</h1>
              <img src={loginListThreeFilled} alt="" className="loginListThreeFilled"/>
              <h1 className="loginL">L</h1>
              <img src={loginVector} alt="" className="loginVector"/>
              <img src={loginCrystalBall} alt="" className="loginCrystalBall"/>
            </div>
          </div>
          <div className="flex flex-col" style={{gridRowStart: "2", gridRowEnd: "3"}}>
            <div className="">
              <h2 className="loginEmail">
                Email
              </h2>
              <input className="loginEmailInput"/>
            </div>
            <div className="">
              <h2 className="loginPassword">
                Password
              </h2>
              <input className="loginPasswordInput"/>
            </div>
          </div>
          <div className="" style={{gridRowStart: "3", gridRowEnd: "4"}}>
            <div>
              <button
                type="submit"
                onClick={() => login()}
                className="googleLoginButton"
              >
                <div className="googleLoginButtonImageContainer">
                  <img src={googleGImage} alt="" className="googleLoginButtonImage"/>
                </div>
                <span className="googleLoginButtonText">
                  Sign in with Google <span aria-hidden="true"></span>
                </span>
              </button>
            </div>
            <div>
              <button className="loginButton">
                <span className="loginButtonText">
                  Login
                </span>
              </button>
            </div>
          </div>
          <div style={{gridRowStart: "4", gridRowEnd: "5"}}>
            <button className="signupButton">
              <span className="signupButtonText">
                Sign Up
              </span>
            </button>
            <button className="forgotButton">
              <span className="forgotButtonText">
                Forgot Password/Username
              </span>
            </button>
          </div>
        </div>
      </AuthLayout>
    );
}