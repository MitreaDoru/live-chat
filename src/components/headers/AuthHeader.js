import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from './AuthHeader.module.css';
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";
import { chatAction } from "../store/chat";
import { useNavigate } from "react-router-dom";
const HomeHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const localStorageIsAuth = localStorage.getItem('isAuth');
    const logoutHandler = () => {
        dispatch(authAction.logout());
        dispatch(chatAction.displayedChat(''));
        dispatch(chatAction.leaveButton(false));
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('image');
        navigate('/login');
    }
    return (
        <Fragment>
            <header className={styled.header}>
                <div className={styled.name} onClick={() => navigate('/')}>Live Chat</div>
                <nav>
                    <ul>
                        <li>
                            {!localStorageIsAuth && <Link to='/signin'>Signin</Link>}
                            {localStorageIsAuth && <Link onClick={logoutHandler} to='/login'>Logout</Link>}
                            {!localStorageIsAuth && <Link to='/login'>Login</Link>}
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </Fragment>
    )
}

export default HomeHeader