import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../../../redux/action/homeAction';
import { dataNavigation } from '../helper';
import NavItem from './NavItem';

const GroupNavigation = () => {

    const renderNav = () => {
        return dataNavigation?.map((nav,index)=> {
            return <NavItem
                data={nav}
                key={index}
            />
        })
    }

    return (
        <nav className="section-navigation">
            <div id="section-navigation-medium-slider" className="section-menu secondary">
                {renderNav()}
            </div>

            <div id="section-navigation-medium-slider-controls" className="slider-controls">
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

export default GroupNavigation