import styled from './ChatInfo.module.css';
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../../socket";
import { useContext } from 'react';
import { chatAction } from '../store/chat';

const ChatInfo = () => {
    //General data
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();
    const displayedChat = useSelector((state) => state.chat.displayedChat);
    const windowWidth = useSelector((state) => state.chat.windowWidth);
    const leaveButton = useSelector((state) => state.chat.leaveButton);
    //My data
    const name = useSelector((state) => state.chat.name);
    const localStorageId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    /////
    const leaveGroupHandler = (e) => {
        e.preventDefault();
        dispatch(chatAction.showRight(false))
        dispatch(chatAction.leaveButton(false));
        fetch('https://live-chat-scql.onrender.com/leave-group', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({ id: localStorageId, convId: displayedChat._id ? displayedChat._id : displayedChat.id, leaveName: name })
        })
            .then(result => result.json())
            .then(data => {
                socket.emit('leave-conversation', data);

            })
            .catch(err => {
                console.log(err);
            })
    }
    const backHandler = () => {
        dispatch(chatAction.showRight(false))
    }
    return (
        <div className={styled.info}>
            <div className={styled.conversationInfo}>
                <div className={styled.conversationDetails}>
                    {windowWidth < 800 && <button className={`fa ${styled.backButton}`} onClick={backHandler}>&#xf104;</button>}
                    {displayedChat && <img src={displayedChat.conversationUsers?.length === 2 ? Object.values([{ ...displayedChat.conversationUsers }][0]).filter(user => user.id !== localStorageId)[0]?.image : displayedChat.image} alt='user'></img>}

                    {windowWidth > 380 && <div className={styled.nameAndLastMessage}>
                        <div className={styled.chatName}>
                            {displayedChat.secondUserName === name ? displayedChat.name : displayedChat.secondUserName}
                        </div>
                        <div className={styled.membersNames}>
                            {(displayedChat.messages && displayedChat.messages.length !== 0) && (displayedChat.messages ? displayedChat.messages[displayedChat.messages.length - 1].name : '') + ': ' + (displayedChat.messages ? displayedChat.messages[displayedChat.messages.length - 1].message.length > 8 ? displayedChat.messages[displayedChat.messages.length - 1].message.slice(0, 8) + '...' : displayedChat.messages[displayedChat.messages.length - 1].message : '')}
                        </div>
                    </div>}
                </div>
                {leaveButton && <button onClick={leaveGroupHandler}>Leave</button>}
            </div>
        </div>

    )
}

export default ChatInfo