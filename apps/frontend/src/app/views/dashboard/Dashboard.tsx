// Dashboard.js
import React from 'react';
import hankHill from '../../images/dash/Hank_Hill.webp';
import './dashboard.css';

export const Dashboard = () => {

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='dashboard-content'>
                    <img
                        src={hankHill}
                        alt="Frame2"
                        className='profile-image lg:hidden'
                    />

                    <div id="hello" className='greeting-text'>Hi, Bsmith</div>

                    <div className='net-worth-section'>
                        <div className='net-worth-value'>###.##</div>
                        <div className='net-worth-label'>Net worth</div>
                    </div>

                    <div className='buttons-section'>
                        <button 
                            id="CashFlowBTN" 
                            className='dashboard-button'
                        >
                            Cash Flow
                        </button>
                        <button 
                            id="AssetTrackerBTN"
                            className='dashboard-button'
                        >
                            Balance Sheet
                        </button>
                        <button 
                            id="FirstTimeUserBTN"
                            className='first-time-user-text'
                        >
                            First Time User?
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
