// import './hamburger.css';
// import hamburgerMenu from '../../images/dash/hamburger_menu.svg';
import crystalBall from '../../images/dash/crystal-ball.svg'
import lineList from '../../images/dash/line-md_list-3-filled.svg'
import image103 from '../../images/logos/loginGroup103.svg'
import hamburger_menu from '../../images/dash/hamburger_menu.svg'
import hankHill from '../../images/dash/Hank_Hill.webp'
import { Link } from "react-router-dom";
import path from 'path'

export default function HamburgerNav() {
    return (
        <div className="nav">
            <div className="nav-container">
                <div id="FlyoutMenuContainer" className="  absolute inset-0">
                    <div id="FlyoutMenu-bg" className="absolute inset-0 w-full h-full bg-gray-900 opacity-50 "></div>
                    <div
                        id="FlyoutMenuRoot"
                        className=" bg-black absolute left-0 top-0 flex flex-col gap-10 w-64 h-full font-['FONTSPRING_DEMO_-_Capitana_Medium'] items-start pl-2 py-16  "
                    >
                        <div className="ease-in-out duration-1000 flex flex-row ml-4 gap-4 w-24 items-start">
                            <div className="flex flex-row gap-1 w-16 items-start">
                                <div className="flex flex-row gap-1 w-10 items-start">
                                    <div className="text-lg text-white"></div>
                                    <img
                                        src={lineList}
                                        alt="Linemdlistfilled"
                                        id="Linemdlistfilled"
                                        className="mt-1 w-5"
                                    />
                                </div>
                                <div id="L" className="text-lg text-white mt-1">
                                    L{" "}
                                </div>
                            </div>
                            <img
                                src={crystalBall}
                                alt="CrystalBall"
                                id="CrystalBall"
                                className="mt-1 w-5"
                            />
                        </div>
                        <div className="relative flex flex-row w-full font-['Sofia_Pro'] items-start">
                            <div className="font-bold text-white border-solid border-t border-[#6f6f6f] w-full h-10 absolute top-0 left-0 flex flex-row justify-center pt-3 items-start">
                                <Link to="/dashboard"> Dashboard </Link>
                            </div>
                            <div className="font-bold text-white border-solid border-t border-[#6f6f6f] w-full h-10 absolute top-10 left-0 flex flex-row justify-center pt-3 items-start">
                                <Link to="/"> Cash Flow </Link>
                            </div>
                            <div className="font-bold text-white border-solid border-t border-[#6f6f6f] w-full h-10 absolute top-20 left-0 flex flex-row justify-center pt-3 items-start">
                                <Link to="/">  Assets</Link>
                            </div>
                            <div className="font-bold text-white border-solid border-t border-[#6f6f6f] w-full h-10 absolute top-32 left-0 flex flex-row justify-center pt-3 items-start">
                                <Link to="/"> Liabilities</Link>
                            </div>
                            <div className="font-bold text-white border-solid border-[#6f6f6f] w-full h-10 absolute top-40 left-0 flex flex-row justify-center pt-3 items-start border-y">
                                <Link to="/">  Logout </Link>
                            </div>
                            <div className="font-bold text-white border-solid border-b border-[#6f6f6f] relative flex flex-row justify-center mt-48 pt-3 w-full h-10 items-start">
                                <Link to="/">  Settings </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div
                id="HomePageDashboardRoot"
                className="bg-white flex flex-col justify-between gap-[112px] w-full font-['Sofia_Pro'] items-start pt-3 pb-16 px-6 rounded-[40px]"
            >
                <div className="flex flex-col justify-between gap-16 w-full font-['FONTSPRING_DEMO_-_Capitana_Medium'] items-start">
                    <div className="flex flex-col gap-8 w-2/3 h-24 items-start">
                        <img
                            src={image103}
                            alt="top_image"
                            className="ml-[109px]"
                        />

                        <div className="flex flex-row justify-between w-4/5 items-start">

                            <button>
                                <img
                                    src={hamburger_menu}
                                    alt="HamburgerMenu"
                                    id="HamburgerMenu"
                                />
                            </button>
                            <img
                                src={hankHill}
                                alt="Frame2"
                                className="w-8 rounded-xl"
                            />
                        </div>


                    </div>
                    <div className="text-4xl ml-20">Hi, Bsmith</div>
                    <div className="flex flex-col gap-16 w-full font-['Sofia_Pro'] items-start">
                        <div className="flex flex-col ml-20 gap-6 w-1/2 items-start">
                            <div className="text-5xl font-bold">###.##</div>
                            <div className="text-4xl font-light ml-4">Net worth</div>
                        </div>
                        <div className="flex flex-col gap-8 w-full items-start">
                            <button
                                id="DailyCashFlowBTN"
                                className="text-xl hover:font-mono font-bold text-white bg-[#148cfb] flex flex-row justify-center pt-4 w-full h-12 cursor-pointer items-start rounded-[100px]"
                            >
                                Cash Flow
                            </button>
                            <button
                                id="AssetTrackerBTN"
                                className="text-xl hover:font-mono font-bold text-white bg-[#148cfb] flex flex-row justify-center pt-4 w-full h-12 cursor-pointer items-start rounded-[100px]"
                            >
                                Balance Sheet
                            </button>
                        </div>
                    </div>
                </div>
                <div className="font-bold border-solid flex flex-row ml-24 w-2/5 h-10 items-start pt-2 px-2 border-black border-2 rounded-[20px]">
                    First Time User ?
                </div>
            </div>
        </div>
    )
}
