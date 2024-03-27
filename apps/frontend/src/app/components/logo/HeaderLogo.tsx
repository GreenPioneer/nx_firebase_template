import loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import loginVector from "../../images/logos/loginVector.svg"
import loginCrystalBall from "../../images/logos/loginCrystalBall.svg"

import './HeaderLogo.css'
export default function HeaderLogo() {

    return (
            <div className="HeaderLogo" >
                <h1 className="HeaderW">W</h1>
                <img src={loginListThreeFilled} alt="" className="HeaderListThreeFilled" />
                <h1 className="HeaderL">L</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="60" viewBox="0 0 3 60" fill="none">
                    <path d="M1.5 2V58" stroke="white" stroke-width="3" stroke-linecap="square" />
                </svg>
                <img src={loginCrystalBall} alt="" className="HeaderCrystalBall" />

            </div>

    )
}
