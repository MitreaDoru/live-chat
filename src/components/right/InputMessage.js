import styled from './InputMessage.module.css';
import { useSelector, useDispatch } from "react-redux";
import { chatAction } from '../store/chat';
import { SocketContext } from "../../socket";
import { useContext } from 'react';

const InputMessage = () => {
    //General data
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();
    const displayedChat = useSelector((state) => state.chat.displayedChat);
    const showInput = useSelector((state) => state.chat.showInput);
    //My data
    const personalName = useSelector((state) => state.chat.name);
    const message = useSelector((state) => state.chat.message);
    const image = localStorage.getItem('image');
    const localStorageUserId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    ////

    const messageHandler = (e) => {
        e.preventDefault()
        fetch('https://live-chat-scql.onrender.com/message', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({ id: displayedChat._id ? displayedChat._id : displayedChat.id, image: image, personalId: localStorageUserId, personalName: personalName, name: displayedChat.name, secondUserName: displayedChat.secondUserName, message: message, conversationUsers: displayedChat.conversationUsers, displayedChat: displayedChat })
        })
            .then(result => result.json())
            .then(data => {
                socket.emit('conversations', displayedChat, data);
                dispatch(chatAction.leaveButton(true));
            })
            .catch(err => {
                console.log(err);
            })
        dispatch(chatAction.getMessage(''));
    }
    return (

        <div className={styled.input}>
            <form className={styled.message} onSubmit={messageHandler}>
                {showInput && <textarea type="text" placeholder="Type a message" name='message' onChange={(e) => dispatch(chatAction.getMessage(e.target.value))} value={message}></textarea>}
                {showInput && <button disabled={!message.trim().length > 0} type='submit' className={`material-icons`}>&#xe163;</button>}
            </form>
        </div>

    )
}

export default InputMessage

