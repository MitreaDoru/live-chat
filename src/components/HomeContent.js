import styled from "./HomeContent.module.css";
import Left from "./Left";
import Right from "./Right";
import { authAction } from "./store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { chatAction } from './store/chat';
import { SocketContext } from "../socket";
const HomeContent = () => {
    //General data
    const socket = useContext(SocketContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const displayedChat = useSelector((state) => state.chat.displayedChat);
    const error = useSelector(state => state.chat.error);
    const showRight = useSelector(state => state.chat.showRight);
    //My data
    const localStorageIsAuth = localStorage.getItem('isAuth');
    const localStorageId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const image = localStorage.getItem('image');
    ////
    const windowWidth = useSelector(state => state.chat.windowWidth)
    // console.log(window);
    useEffect(() => {
        if (!localStorageIsAuth) {
            navigate('/login');
        } else {
            const expiryDate = localStorage.getItem('expiryDate');
            setAutoLogout(new Date(expiryDate).getTime() - new Date(new Date()).getTime());
        }

    })
    const logoutHandler = () => {
        dispatch(authAction.logout());
        dispatch(chatAction.displayedChat(''));
        dispatch(chatAction.leaveButton(false));
        dispatch(chatAction.showInput(false));
        dispatch(chatAction.leaveButton(false));
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
        localStorage.removeItem('isAuth');
    }

    const setAutoLogout = milliseconds => {
        setTimeout(() => {
            logoutHandler();
            navigate('/login');
        }, milliseconds);
    };
    useEffect(() => {
        socket.on('leave', (data) => {
            if (data === 'Deleted') {
                return dispatch(chatAction.displayedChat(''));
            } else {
                const userIdFromConversation = data.conversationUsers.find(userInfo => userInfo.id === localStorageId);
                if (userIdFromConversation?.id === localStorageId && data._id === (displayedChat._id ? displayedChat._id : displayedChat.id)) {
                    dispatch(chatAction.displayedChat(data));
                    dispatch(chatAction.updateConversations(data));

                } else if (userIdFromConversation?.id === localStorageId) {
                    dispatch(chatAction.updateConversations(data));
                } else {
                    dispatch(chatAction.displayedChat(''));
                    dispatch(chatAction.leaveConversation(data));

                }
            }
            return () => {
                socket.removeAllListeners();
            }
        })
    }, [dispatch, localStorageId, displayedChat._id, displayedChat.id, socket])
    useEffect(() => {
        socket.on('image', conversations => {
            conversations.map(conversation => {
                conversation.conversationUsers.map(userInfo => {
                    if (userInfo.id.toString() === localStorageId) {
                        if (conversation._id.toString() === (displayedChat._id ? displayedChat._id : displayedChat.id)) {
                            dispatch(chatAction.updateConversations({ conversation: conversation, image: true }))
                            dispatch(chatAction.displayedChat(conversation))
                        } else {
                            dispatch(chatAction.updateConversations({ conversation: conversation, image: true }))
                        }
                    }
                    return true
                })
                return true
            }
            )
        })
    }, [dispatch, displayedChat, socket, localStorageId])
    fetch('https://live-chat-scql.onrender.com/users', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token
        },
    })
        .then(result => result.json())
        .then(data => {
            dispatch(chatAction.name(data.users.find(user => user.userId === localStorageId)?.name));
            dispatch(chatAction.user(data.users));
            const agenda = data.users.filter(user => user.userId !== localStorageId);
            agenda.map(user => [{ ...user, isChecked: false }]);
            dispatch(chatAction.userAgenda(agenda));
        })
        .catch(err => {
            console.log(err);
        })

    fetch('https://live-chat-scql.onrender.com/conversation', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({ id: localStorageId })
    })
        .then(result => result.json())
        .then(data => {
            dispatch(chatAction.getConversations(data.conversations));
        })
        .catch(err => {
            console.log(err);
        })
    const classLeft = showRight ? styled.dontShow : '';
    const classRight = !showRight ? styled.dontShow : '';
    const handleResize = () => {
        dispatch(chatAction.windowWidth(window.innerWidth))
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    useEffect(() => {
        dispatch(chatAction.personalImage(image))
        dispatch(chatAction.windowWidth(window.innerWidth))
    })
    return (
        <div className={styled.home}>
            <p>{error}</p>
            {localStorageIsAuth && <div className={styled.container}>
                <div className={`${styled.left} ${windowWidth < 800 ? classLeft : ''}`}>
                    <Left />
                </div>
                <div className={`${styled.right} ${windowWidth < 800 ? classRight : ''}`}>
                    <Right />
                </div>
            </div>}
        </div >
    )
}

export default HomeContent