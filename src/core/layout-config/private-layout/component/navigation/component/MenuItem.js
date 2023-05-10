import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../../../../redux/action/homeAction';

const MenuItem = (props) => {

    const {data} = props;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {pathname} = window.location;


    return (
        <li className={`menu-item ${pathname.substring(1) === data.path ? 'active' : ''}`}>
                    
            <a className="menu-item-link text-tooltip-tfr" onClick={()=> {
                dispatch(setLoading({
                    status: 'isLoading'
                }))
                navigate(`/${data.path}`);
            }} data-title={data.title}>
            
            {data.icon}
            
            </a>
            
        </li>
    )
}

export default MenuItem