import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonNavigation from './component/ButtonNavigation';
import { dataNavigation } from './helper';

const ProfileNavigation = () => {

    // Method
    const renderButtonNavigation = () => {
        return dataNavigation?.map((btn, i) => {
            return <ButtonNavigation data={btn}/>
        })
    }

    // Return
    return (
        <nav className="section-navigation">
            <div id="section-navigation-slider" className="section-menu">
               {renderButtonNavigation()}
            </div>
            <div id="section-navigation-slider-controls" className="slider-controls">
                <div className="slider-control left">
                    <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                </div>
                <div className="slider-control right">
                    <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default ProfileNavigation