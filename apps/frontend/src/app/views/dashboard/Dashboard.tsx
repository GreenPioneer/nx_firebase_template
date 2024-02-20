import { useState } from "react";
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import hamburger_menu from '../../images/dash/hamburger_menu.svg';
import hankHill from '../../images/dash/Hank_Hill.webp';
import image103 from '../../images/logos/loginGroup103.svg';
import HamburgerNav from "../../components/hamburger-nav/HamburgerNav";
import styles from '../../app.module.scss';

export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AuthLayout>
            {!isOpen ? (
                <form>
                    <div className={styles['hamburger-menu-section']}>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <img
                                src={hamburger_menu}
                                alt="HamburgerMenu"
                                className={styles['profile-image']}
                            />
                        </button>
                    </div>
                    <div className={styles['dashboard-content']}>
                        <img
                            src={hankHill}
                            alt="Frame2"
                            className={styles['profile-image']}
                        />

                        <div id="hello" className={styles['greeting-text']}>Hi, Bsmith</div>

                        <div className={styles['net-worth-section']}>
                            <div className={styles['net-worth-value']}>###.##</div>
                            <div className={styles['net-worth-label']}>Net worth</div>
                        </div>

                        <div className={styles['buttons-section']}>
                            <button 
                                id="CashFlowBTN" 
                                className={styles['dashboard-button']}
                            >
                                Cash Flow
                            </button>
                            <button 
                                id="AssetTrackerBTN"
                                className={styles['dashboard-button']}
                            >
                                Balance Sheet
                            </button>
                            <button 
                                id="FirstTimeUserBTN"
                                className={styles['first-time-user-text']}
                            >
                                First Time User?
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <div onClick={() => setIsOpen(!isOpen)}>
                    <HamburgerNav />
                </div>
            )}
        </AuthLayout>
    );
};
