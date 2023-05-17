import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../../redux/action/homeAction';

const Tag = (props) => {

    // Props
    const {data} = props;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Return
    return (
        <a class="tag-item secondary" onClick={()=> {
            dispatch(setLoading())
            navigate("newsfeed")
        }}>{data.name}</a>
    )
}

export default Tag