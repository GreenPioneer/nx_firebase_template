import React, { useState, useContext, useEffect } from "react"
import "./namepage.css"
import  loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import  loginVector from "../../images/logos/loginVector.svg"
import  loginCrystalBall from "../../images/logos/loginCrystalBall.svg"
import  loginGroup103 from "../../images/logos/loginGroup103.svg"
import { getAuth, updateCurrentUser, updateProfile } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
// import "../../firebase/auth"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const NamePage = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")

    // const auth = getAuth()
    // const user = firebase.auth().currentUser
    // user?.updateProfile({
        
    // }).then(() => {
    //     console.log("profile updated")
    // }).catch((err: string) => {
    //     console.log(err)
    // })

    return (
        <AuthLayout>
            <h1>Name Page</h1>
        </AuthLayout>
    )
}