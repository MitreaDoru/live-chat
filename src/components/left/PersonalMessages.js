import styled from './PersonalMessages.module.css';
import { useSelector, useDispatch } from "react-redux";
import { chatAction } from '../store/chat';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
const PersonalMessages = () => {
    //General data
    const dispatch = useDispatch();
    const windowWidth = useSelector((state) => state.chat.windowWidth);
    const isSearching = useSelector((state) => state.chat.isSearching);
    const name = useSelector((state) => state.chat.name);
    //My information
    const image = localStorage.getItem('image');
    const localStorageId = localStorage.getItem('userId');
    const agenda = useSelector((state) => state.chat.agenda);
    const filteredAgenda = useSelector((state) => state.chat.filteredAgenda);
    const filteredAgendaNotFound = useSelector((state) => state.chat.filteredAgendaNotFound);
    //Conversations data
    const conversations = useSelector((state) => state.chat.conversations);
    const createGroup = useSelector((state) => state.chat.createGroup);
    ////
    return (
        <div className={styled.conversation}>
            {(!createGroup ? (isSearching ? ((filteredAgenda.length !== 0 || filteredAgendaNotFound) ? filteredAgenda : agenda) : conversations) : agenda).map(contact =>
                <Fragment key={contact._id ? contact._id : contact.userId}>
                    {<Link onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        if (contact.userId) {
                            dispatch(chatAction.isSearching(false));
                            dispatch(chatAction.groupUsers(false));
                            dispatch(chatAction.showInput(true));
                            dispatch(chatAction.createGroup(false));
                            dispatch(chatAction.groupName(''));
                            dispatch(chatAction.showRight(true))
                            dispatch(chatAction.error(false))

                            const checkIfConversationExist = conversations.map(conversation => {
                                let conversationForReturn;
                                if (conversation.conversationUsers.length === 2) {
                                    if ((conversation.conversationUsers[0].id === localStorageId || conversation.conversationUsers[0].id === contact.userId) && (conversation.conversationUsers[1].id === localStorageId || conversation.conversationUsers[1].id === contact.userId)) {
                                        conversationForReturn = conversation;
                                    }
                                }
                                return conversationForReturn;
                            })
                            const newUserIds = checkIfConversationExist.filter(conversation => conversation !== undefined);
                            if (newUserIds[0]) {
                                dispatch(chatAction.displayedChat(newUserIds[0]));
                                dispatch(chatAction.leaveButton(true));
                            } else {
                                dispatch(chatAction.leaveButton(false));
                                dispatch(chatAction.displayedChat({ id: isSearching ? contact.userId : contact._id, name: name, image: contact.image, secondUserName: contact.name, messages: contact.messages, conversationUsers: contact.conversationUsers ? contact.conversationUsers : [{ id: localStorageId, image: image, name: name }, { id: contact.userId, image: contact.image, name: contact.name }] }));
                            }
                        } else {
                            dispatch(chatAction.displayedChat({ id: isSearching ? contact.userId : contact._id, name: contact.name, image: contact.image, secondUserName: contact.secondUserName, messages: contact.messages, conversationUsers: isSearching ? [{ id: localStorageId, image: image, name: name }, { id: contact.userId, image: contact.image, name: contact.name }] : contact.conversationUsers }));
                            dispatch(chatAction.leaveButton(true));
                            dispatch(chatAction.showInput(true));
                            dispatch(chatAction.groupUsers(false));
                            dispatch(chatAction.showRight(true))
                        }
                    }} className={styled.conversationInfo}>
                        <div className={styled.conversationDetails}>
                            <img src={`${contact.conversationUsers?.length === 2 ? [...contact.conversationUsers].filter(user => user.id !== localStorageId)[0].image : contact.image}`} alt='user'></img>
                            <div className={styled.nameAndLastMessage}>
                                <div className={styled.chatName}>
                                    {contact.conversationUsers?.length === 2 ? (contact.secondUserName === name ? (windowWidth < 960 ? contact.name.slice(0, 7) + '...' : contact.name) : (windowWidth < 960 ? contact.secondUserName.slice(0, 7) + '...' : contact.secondUserName)) : (windowWidth < 960 ? contact.name.slice(0, 7) + '...' : contact.name)}
                                </div>
                                <div className={styled.lastMessage}>
                                    {(!isSearching && !createGroup) && (contact.messages.length !== 0 ? contact.messages[contact.messages.length - 1].name + " : " + (contact.messages[contact.messages.length - 1].message.length > 8 ? contact.messages[contact.messages.length - 1].message.slice(0, 8) + '...' : contact.messages[contact.messages.length - 1].message) : '')}
                                </div>
                            </div>
                        </div>
                        <div className={styled.lastMessageTime}>
                            {isSearching && <input onClick={(e) => {
                                e.stopPropagation();
                                const newAgenda = agenda.map(user => (user.userId === contact.userId) ? { ...user, isChecked: !contact.isChecked } : user);
                                console.log(contact);
                                dispatch(chatAction.userAgenda(newAgenda));
                                dispatch(chatAction.groupUsers(contact));
                            }
                            }
                                type='checkbox' defaultChecked={contact.isChecked}></input>}
                            {(!isSearching && !createGroup) && (contact.messages.length !== 0 ? new Date(contact.messages[contact.messages.length - 1].time).getHours() + ":" + (new Date(contact.messages[contact.messages.length - 1].time).getMinutes() < 10 ? "0" + new Date(contact.messages[contact.messages.length - 1].time).getMinutes() : new Date(contact.messages[contact.messages.length - 1].time).getMinutes()) : '')}
                        </div>
                    </Link>}
                </Fragment>)
            }
        </div >

    )
}

export default PersonalMessages