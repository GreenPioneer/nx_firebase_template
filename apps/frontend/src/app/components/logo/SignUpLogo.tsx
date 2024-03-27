import loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import loginVector from "../../images/logos/loginVector.svg"
import loginCrystalBall from "../../images/logos/loginCrystalBall.svg"

import './SignUpLogo.css'
export default function SignUpLogo() {

    return (
        <>
            <div className='signupLogoContainer'>
                <div className="signupLogo" >
                    <h1 className="signupW">W</h1>
                    <img src={loginListThreeFilled} alt="" className="signupListThreeFilled" />
                    <h1 className="signupL">L</h1>
                    <img src={loginVector} alt="" className="signupVector" />
                    <img src={loginCrystalBall} alt="" className="signupCrystalBall" />
                </div>
            </div>
        </>
    )
}
