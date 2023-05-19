import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setLoading } from '../../../../../../redux/action/homeAction';

const NavItem = (props) => {

    const {data} = props;

    const {pathname} = window.location;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    return (
        <a class={`section-menu-item ${pathname.substring(1) === data.path ? 'active' : ''}`} onClick={()=>{
            dispatch(setLoading({
                status: 'isLoading'
            }))
            navigate({
                pathname: `/${data.path}`,
                search: `?id=${id}`
            })
        }}>
            {data.icon}

            <p className="section-menu-item-text">{data.label}</p>
        </a>
    )
}

export default NavItem