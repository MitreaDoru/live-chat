import styled from "./LoginContent.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";
import { chatAction } from "../store/chat";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const navigate = useNavigate()
    const loginHandler = (e) => {
        e.preventDefault();
        fetch('https://live-chat-scql.onrender.com/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(result => result.json())
            .then(data => {
                if (data.errorMessage) {
                    setEmail(data.oldInput.email);
                    setPassword(data.oldInput.password);
                    setErrorMessage(data.errorMessage);
                } else {
                    dispatch(authAction.login({ token: data.token, userId: data.userId, image: data.image }));
                    dispatch(chatAction.personalImage(data.image))
                    dispatch(authAction.login({ image: data.image }));
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    localStorage.setItem('isAuth', true);
                    localStorage.setItem('image', data.image);
                    const remainingMilliseconds = 60 * 60 * 1000;
                    const expiryDate = new Date(
                        new Date().getTime() + remainingMilliseconds
                    );
                    localStorage.setItem('expiryDate', expiryDate);
                    navigate('/');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className={styled.loginContainer}>
            <form onSubmit={loginHandler} className={styled.login}>
                <p>{errorMessage}</p>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" onChange={emailChangeHandler} value={email}></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={passwordChangeHandler} value={password}></input>
                <button type="submit">Login</button>
            </form>
        </div>

    )
}

export default Login