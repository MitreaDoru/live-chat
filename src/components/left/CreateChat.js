import { chatAction } from '../store/chat';
import styled from './CreateChat.module.css'
import { useSelector, useDispatch } from "react-redux";
import { SocketContext } from "../../socket";
import { useContext, useState } from 'react';
const CreateChat = () => {
    //General data
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();
    const displayedChat = useSelector(state => state.chat.displayedChat);
    const agenda = useSelector(state => state.chat.agenda);
    //About ME
    const name = useSelector(state => state.chat.name);
    const image = useSelector(state => state.chat.image);
    const localStorageId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    //CreateGroup
    const createGroup = useSelector(state => state.chat.createGroup);
    const groupUsers = useSelector(state => state.chat.groupUsers);
    const groupName = useSelector(state => state.chat.groupName);
    const [groupImage, setGroupImage] = useState('')
    const groupImageIsSelected = useSelector(state => state.chat.groupImageIsSelected);
    const imAlreadyInGroup = groupUsers?.find(user => user.userId === localStorageId);
    ////
    const createGroupHandler = (e) => {
        e.preventDefault();
        const checkMyUserExist = imAlreadyInGroup ? groupUsers : [...groupUsers, { name: name, image: image, userId: localStorageId }]
        const formData = new FormData()
        formData.append('name', groupName)
        formData.append('image', groupImage)
        formData.append('groupUsers', JSON.stringify(checkMyUserExist))

        fetch('https://live-chat-scql.onrender.com/create-group', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: formData
        })
            .then(result => result.json())
            .then(data => {
                if (data.errorMessage) {
                    if (!data.goodFile) {
                        dispatch(chatAction.createGroup(false));
                        dispatch(chatAction.groupImageIsSelected(false))
                    }
                    dispatch(chatAction.error(data.errorMessage));
                    dispatch(chatAction.groupUsers(data.oldInput.groupUsers));
                } else {
                    socket.emit('conversations', displayedChat, data);
                    dispatch(chatAction.groupName(''));
                    dispatch(chatAction.groupUsers(false));
                    const newAgenda = agenda.map(user => user.isChecked ? { ...user, isChecked: false } : user);
                    dispatch(chatAction.filteredAgendaNotFound(false));
                    dispatch(chatAction.filteredAgenda(agenda));
                    dispatch(chatAction.userAgenda(newAgenda));
                    dispatch(chatAction.createGroup(false));
                    dispatch(chatAction.isSearching(false));
                    dispatch(chatAction.error(''));
                    dispatch(chatAction.showRight(true))
                    dispatch(chatAction.groupImageIsSelected(false))
                    dispatch(chatAction.showGroupNameInput(false))
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    const changeImageHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        formData.append('id', localStorageId)
        fetch('https://live-chat-scql.onrender.com/change-image', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: formData
        })
            .then(result => result.json())
            .then(data => {
                if (data.errorMessage) {
                    dispatch(chatAction.error(data.errorMessage))
                } else {
                    dispatch(chatAction.error(''))
                    dispatch(chatAction.personalImage(data.image))
                    localStorage.setItem('image', data.image)
                    socket.emit('change-image', data.conversations)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    const addGroupImageHandler = (e) => {
        setGroupImage(e.target.files[0])
        dispatch(chatAction.groupImageIsSelected(true))
    }
    const addGroupNameHandler = () => {
        dispatch(chatAction.createGroup(true))
        dispatch(chatAction.groupImageIsSelected(false))
        dispatch(chatAction.showGroupNameInput(true))
    }
    return (

        <div className={styled.action}>
            <label>
                <input type='file' name='image' id='image' onChange={changeImageHandler} className={styled.none}></input>
                <img src={image} alt='user'></img>
            </label>
            {(groupUsers.length >= 2 && !createGroup && !groupImageIsSelected) && <label className={styled.groupImage}>Group Image
                <input type='file' name='image' id='image' onChange={addGroupImageHandler} className={styled.none}></input>

            </label>}
            {groupImageIsSelected && <button onClick={addGroupNameHandler}>Group Name</button>}
            {createGroup && <button onClick={createGroupHandler}>Create Group </button>}
        </div>

    )
}

export default CreateChat