import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import styled from './HomeHeader.module.css'
import { useDispatch } from "react-redux"
import { authAction } from "../store/auth";
const HomeHeader = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(authAction.logout)
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
        localStorage.removeItem('image');
        localStorage.removeItem('isAuth');
    }
    return (
        <Fragment>
            <header className={styled.header}>
                <div className={styled.name}>Live Chat</div>
                <nav>
                    <ul>
                        <li>
                            <Link onClick={logoutHandler} to='/login'>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </Fragment>
    )
}

export default HomeHeader