import styled from "./SigninContent.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signin = () => {
    const navigate = useNavigate('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [image, setImage] = useState('');
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const imageChangeHandler = (e) => {
        setImage(e.target.files[0])
    }

    const signinHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('image', image)
        formData.append('email', email)
        formData.append('password', password)
        e.preventDefault()
        fetch('https://live-chat-scql.onrender.com/signup', {
            method: 'POST',

            body: formData
        })
            .then(result => result.json())
            .then(data => {
                if (!data.message) {
                    setName(data.oldInput.name);
                    setEmail(data.oldInput.email);
                    setImage(data.oldInput.image)
                    setPassword(data.oldInput.password);
                    setErrorMessage(data.errorMessage);
                } else {
                    navigate('/live-chat/login');
                }
            })
    }

    return (
        <div className={styled.signinContainer}>
            <form onSubmit={signinHandler} className={styled.signin} >
                <p>{errorMessage}</p>
                <label htmlFor="name">Name</label>
                <input onChange={nameChangeHandler} type="text" name="name" value={name}></input>
                <label htmlFor="image">Avatar</label>
                <input onChange={imageChangeHandler} type="file" name="image" id="image" ></input>
                <label htmlFor="email">E-mail</label>
                <input onChange={emailChangeHandler} type="email" name="email" value={email}></input>
                <label htmlFor="password">Password</label>
                <input onChange={passwordChangeHandler} type="password" name="password" value={password}></input>
                <button type="submit">Signin</button>
            </form>
        </div>

    )
}

export default Signin