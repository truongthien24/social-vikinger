import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../../../../../redux/action/homeAction';

const ButtonNavigation = (props) => {

    // Props
    const {data} = props;

    // Somethings
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {pathname} = window.location;

    // Method
    const handleNavigation = () => {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        navigate(`/${data.path}`);
    }

    // Return
    return (
        <a className={`section-menu-item ${pathname.substring(1) === data?.path ? 'active' : ''}`} style={{backgroundColor: 'white', cursor: 'pointer'}} onClick={handleNavigation}>
            {data.icon}
            <p className="section-menu-item-text">{data.label}</p>
        </a>
    )
}

export default ButtonNavigation