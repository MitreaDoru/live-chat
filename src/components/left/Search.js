import styled from './Search.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { chatAction } from '../store/chat';
const Search = () => {
    //General data
    const dispatch = useDispatch();
    const showGroupNameInput = useSelector(state => state.chat.showGroupNameInput);
    const isSearching = useSelector(state => state.chat.isSearching);
    //My information
    const agenda = useSelector(state => state.chat.agenda);
    //Conversations data
    const groupName = useSelector(state => state.chat.groupName);
    /////
    const groupNameHandler = (e) => {
        dispatch(chatAction.groupName(e.target.value));
    }
    const searchHandler = (e) => {

        const search = e.target.value;
        if (search.trim().length > 0) {
            const filteredConvo = agenda.filter(conversation => {
                return conversation.name.toLowerCase().includes(search.toLowerCase());
            })
            if (filteredConvo.length === 0) {
                dispatch(chatAction.filteredAgendaNotFound(true));
            } else {
                dispatch(chatAction.filteredAgendaNotFound(false));
            }
            dispatch(chatAction.filteredAgenda(filteredConvo));
        } else {

            dispatch(chatAction.filteredAgenda(agenda));
        }
    }
    const backHandler = () => {
        const newAgenda = agenda.map(user => user.isChecked ? { ...user, isChecked: !user.isChecked } : user);
        dispatch(chatAction.userAgenda(newAgenda));
        dispatch(chatAction.filteredAgendaNotFound(false));
        dispatch(chatAction.filteredAgenda(agenda));
        dispatch(chatAction.groupUsers(false));
        dispatch(chatAction.isSearching(false));
        dispatch(chatAction.createGroup(false));
        dispatch(chatAction.groupName(''));
        dispatch(chatAction.showGroupNameInput(false));
        dispatch(chatAction.error(''));
    }

    setTimeout(() => {

    }, 3000)
    return (

        <div className={styled.search}>
            {isSearching && <button className="fa" onClick={backHandler}>&#xf104;</button>}

            {!showGroupNameInput && <input onChange={searchHandler} type="text" placeholder="Search..." onFocus={() => { dispatch(chatAction.isSearching(true)) }} />}
            {showGroupNameInput && <input type='text' placeholder='Group Name' defaultValue={groupName} onChange={groupNameHandler}></input>}
        </div>

    )
}

export default Search