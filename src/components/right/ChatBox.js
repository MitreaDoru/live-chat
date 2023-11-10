import { Fragment, useContext, useEffect, useRef } from 'react';
import styled from './ChatBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { chatAction } from '../store/chat';
import { SocketContext } from "../../socket";
const ChatBox = () => {
    //General data
    const socket = useContext(SocketContext);
    const displayedChat = useSelector((state) => state.chat.displayedChat);
    const dispatch = useDispatch();
    const ref = useRef(null);
    //My data
    const localStorageId = localStorage.getItem('userId');
    ////

    const scrollDownHandler = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => {
        scrollDownHandler()
    }, [displayedChat])
    useEffect(() => {
        socket.on('new-data', (dataInfo, data) => {
            data.conversationUsers.map(userInfo => {
                if (userInfo.id === localStorageId) {
                    if (displayedChat.id || displayedChat._id) {
                        if ((displayedChat._id ? displayedChat._id : displayedChat.id) === (dataInfo._id ? dataInfo._id : dataInfo.id)) {
                            dispatch(chatAction.displayedChat(data));
                            dispatch(chatAction.updateConversations(data));
                        } else {
                            dispatch(chatAction.displayedChat(displayedChat));
                            dispatch(chatAction.updateConversations(data));
                        }
                    } else {
                        dispatch(chatAction.displayedChat(displayedChat));
                        dispatch(chatAction.updateConversations(data));
                    }
                }
                return true;
            })
        })
        return () => {
            socket.removeAllListeners();
        }
    }, [displayedChat, dispatch, localStorageId, socket])
    return (
        <div className={styled.messages}>
            {displayedChat.messages && displayedChat.messages?.map(message =>
                <Fragment key={message._id}>
                    <div className={`${styled.message} ${message.messageUser === localStorageId ? styled.personalFlexEnd : ''}`}>
                        <div className={`${styled.messageInfo} ${message.messageUser === localStorageId ? styled.personalFlexEnd : ''}`}>
                            {message.messageUser !== localStorageId && message.messageUser ? <img src={message.image} alt='user'></img> : ''}
                            <div className={`${styled.nameAndMessage} ${message.messageUser !== localStorageId ? styled.margin : ''} ${!message.messageUser ? styled.leftConvo : ''}`}>
                                <div className={styled.name}>
                                    {message.messageUser !== localStorageId ? message.name : ''}
                                </div>
                                <pre className={styled.message}>
                                    {message.message}
                                </pre>
                            </div>
                        </div>
                        {message.messageUser && <div className={styled.time}>
                            {new Date(message.time).getHours() + ":" + (new Date(message.time).getMinutes() < 10 ? "0" + new Date(message.time).getMinutes() : new Date(message.time).getMinutes())}
                        </div>}
                    </div>
                </Fragment>
            )}
            <div ref={ref} ></div>
        </div>
    )
}

export default ChatBox